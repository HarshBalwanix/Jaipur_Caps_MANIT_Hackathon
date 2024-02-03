from flask import Flask, request, jsonify
import os
import requests
import tempfile
import fitz
import difflib

app = Flask(__name__)

def extract_text_from_pdf(pdf_path):
    text = ""
    try:
        with fitz.open(pdf_path) as doc:
            for page_num in range(doc.page_count):
                page = doc[page_num]
                text += page.get_text("text")
    except Exception as e:
        print(f"Error extracting text from PDF: {e}")
    return text

def check_plagiarism_api(api_key, text1, text2):
    url = "https://plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com/plagiarism"

    payload = {
        "text": text1,
        "language": "en",
        "includeCitations": False,
        "scrapeSources": False
    }

    headers = {
        "content-type": "application/json",
        "X-RapidAPI-Key": api_key,
        "X-RapidAPI-Host": "plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com"
    }

    try:
        response = requests.post(url, json=payload, headers=headers)
        response.raise_for_status()
        result = response.json()

        if 'percentPlagiarism' in result:
            return result['percentPlagiarism']
        else:
            print("Plagiarism percentage not found in API response.")
            return None

    except requests.exceptions.HTTPError as err:
        print(f"Error: {err}")
        return None

def compare_text_similarity(text1, text2):
    lines1 = text1.splitlines()
    lines2 = text2.splitlines()

    similarity_ratio = difflib.SequenceMatcher(None, lines1, lines2).ratio() * 100

    return similarity_ratio

def calculate_combined_score(plagiarism_percentage, context_similarity):
    plagiarism_weight = 0.4
    context_similarity_weight = 0.6
    combined_score = (plagiarism_percentage * plagiarism_weight) + (context_similarity * context_similarity_weight)

    return combined_score

def assign_grade(combined_score):
    if combined_score >= 90:
        return "A"
    elif combined_score >= 80:
        return "B"
    elif combined_score >= 70:
        return "C"
    else:
        return "F"

def perform_ocr(image_url, ocr_api_key):
    url = "https://ocr-extract-text.p.rapidapi.com/ocr"

    querystring = {"url": image_url}

    headers = {
        "X-RapidAPI-Key": ocr_api_key,
        "X-RapidAPI-Host": "ocr-extract-text.p.rapidapi.com"
    }

    response = requests.get(url, headers=headers, params=querystring)

    if response.status_code == 200:
        return response.json().get('ParsedResults')[0].get('ParsedText')
    else:
        print(f"OCR failed with status code: {response.status_code}")
        return None

def download_from_firebase(file_link, local_filename):
    try:
        response = requests.get(file_link)

        if response.status_code == 200:
            with open(local_filename, 'wb') as file:
                file.write(response.content)
            return local_filename
        else:
            print(f"Failed to download file from Firebase. Status code: {response.status_code}")
            return None

    except Exception as e:
        print(f"Error downloading file from Firebase: {e}")
        return None

@app.route('/grade', methods=['POST'])
def grade_submission_route():
    # Get parameters from the request
    api_key = request.form.get('api_key')
    teacher_link = request.form.get('teacher_link')
    student_link = request.form.get('student_link')

    # Download PDF files from Firebase links
    teacher_pdf_path = download_from_firebase(teacher_link, "/content/teacher_answer.pdf")
    student_pdf_path = download_from_firebase(student_link, "/content/student_answer.pdf")

    # Grade the student's submission
    grade_submission(api_key, teacher_pdf_path, student_pdf_path)

    # Clean up files
    cleanup([teacher_pdf_path, student_pdf_path])

    return jsonify({'message': 'Grading completed successfully'})

@app.route('/plagiarism', methods=['POST'])
def plagiarism_check_route():
    # Get parameters from the request
    api_key = request.form.get('api_key')
    teacher_link = request.form.get('teacher_link')
    student_link = request.form.get('student_link')

    # Download PDF files from Firebase links
    teacher_pdf_path = download_from_firebase(teacher_link, "/content/teacher_answer.pdf")
    student_pdf_path = download_from_firebase(student_link, "/content/student_answer.pdf")

    # Extract text from PDFs
    teacher_text = extract_text_from_pdf(teacher_pdf_path)
    student_text = extract_text_from_pdf(student_pdf_path)

 
    plagiarism_percentage = check_plagiarism_api(api_key, teacher_text, student_text)

    cleanup([teacher_pdf_path, student_pdf_path])

    if plagiarism_percentage is not None:
        return jsonify({'plagiarism_percentage': plagiarism_percentage})
    else:
        return jsonify({'error': 'Plagiarism check failed'})

@app.route('/ocr', methods=['POST'])
def ocr_extraction_route():
    ocr_api_key = request.form.get('ocr_api_key')
    image_url = request.form.get('image_url')

    ocr_text = perform_ocr(image_url, ocr_api_key)

    if ocr_text is not None:
        return jsonify({'ocr_text': ocr_text})
    else:
        return jsonify({'error': 'OCR extraction failed'})

def cleanup(files_to_delete):
    for file_path in files_to_delete:
        try:
            os.remove(file_path)
            print(f"Deleted: {file_path}")
        except OSError as e:
            print(f"Error deleting {file_path}: {e}")

if __name__ == "__main__":
    app.run(debug=True)
