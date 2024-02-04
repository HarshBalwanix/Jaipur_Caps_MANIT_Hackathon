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

def check_plagiarism_api(api_key, text1):
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
    if combined_score >= 80:
        return "A"
    elif combined_score >= 60:
        return "B"
    elif combined_score >= 35:
        return "C"
    else:
        return "F"

def perform_ocr(image_url, ocr_api_key):
    url = "https://ocr-extract-text.p.rapidapi.com/ocr"

    headers = {
        "X-RapidAPI-Key": ocr_api_key,
        "X-RapidAPI-Host": "ocr-extract-text.p.rapidapi.com"
    }

    querystring = {"url": image_url}

    try:
        response = requests.get(url, headers=headers, params=querystring)
        print(response)
        response.raise_for_status()

        json_response = response.json()

        if json_response.get('status', False):
            text = json_response.get('text', '')
            execution_time_ms = json_response.get('executionTimeMS', 0)

            if text:
                print(f"OCR Successful. Text: {text}")
                print(f"Execution Time: {execution_time_ms} ms")
                return text
            else:
                print("Error: OCR response does not contain text.")
                return None
        else:
            print("Error: OCR request unsuccessful.")
            return None

    except requests.exceptions.HTTPError as err:
        print(f"HTTP Error during OCR: {err}")
        return None

    except Exception as e:
        print(f"Error during OCR: {e}")
        return None

def download_from_firebase(file_link):
    try:
        response = requests.get(file_link)

        if response.status_code == 200:
            with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as temp_file:
                temp_file.write(response.content)
                return temp_file.name
        else:
            print(f"Failed to download file from Firebase. Status code: {response.status_code}")
            return None

    except Exception as e:
        print(f"Error downloading file from Firebase: {e}")
        return None

def grade_submission(api_key, teacher_answer_path, student_answer_path):

    teacher_answer = extract_text_from_pdf(teacher_answer_path)

    student_answer = extract_text_from_pdf(student_answer_path)

    plagiarism_percentage = check_plagiarism_api(api_key, student_answer)

    if plagiarism_percentage is not None:
        print(f"Plagiarism Percentage: {plagiarism_percentage}%")

        context_similarity = compare_text_similarity(teacher_answer, student_answer)
        print(f"Context Similarity: {context_similarity}%")

        combined_score = calculate_combined_score(plagiarism_percentage, context_similarity)
        print(f"Combined Score: {combined_score}")

        # Assign grade based on the combined score
        final_grade = assign_grade(combined_score)
        print(f"Final Grade: {final_grade}")

        return final_grade 

    else:
        print("Plagiarism check failed.")
        return None

@app.route('/grade', methods=['POST'])
def grade_submission_route():
    # Get parameters from the request
    api_key = request.form.get('api_key')
    teacher_link = request.form.get('teacher_link')
    student_link = request.form.get('student_link')

    # Download PDF files from Firebase links
    teacher_pdf_path = download_from_firebase(teacher_link)
    student_pdf_path = download_from_firebase(student_link)

    # Grade the student's submission
    
    final_grade = grade_submission(api_key, teacher_pdf_path, student_pdf_path)

    # Clean up files
    cleanup([teacher_pdf_path, student_pdf_path])

    if final_grade is not None:
        return jsonify({
            'final_grade': final_grade
            })
    else:
        return jsonify({'error': 'Grading failed'})

@app.route('/plagiarism', methods=['POST'])
def plagiarism_check_route():
    api_key = request.form.get('api_key')
    student_link = request.form.get('student_link')

    student_pdf_path = download_from_firebase(student_link)

    # Extract text from PDFs
    student_text = extract_text_from_pdf(student_pdf_path)

    # Check plagiarism for the student's answer
    plagiarism_percentage = check_plagiarism_api(api_key, student_text)

    # Clean up files
    cleanup([ student_pdf_path])

    if plagiarism_percentage is not None:
        return jsonify({'plagiarism_percentage': plagiarism_percentage})
    else:
        return jsonify({'error': 'Plagiarism check failed'})

@app.route('/ocr', methods=['POST'])
def ocr_extraction_route():
    ocr_api_key = request.form.get('ocr_api_key')
    api_key = request.form.get('api_key')
    image_url = request.form.get('image_url')
    ocr_text = perform_ocr(image_url, ocr_api_key)
    plagiarism_percentage = check_plagiarism_api(api_key, ocr_text)
    if ocr_text is not None:
        return jsonify({'Plagiarism': plagiarism_percentage})
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
