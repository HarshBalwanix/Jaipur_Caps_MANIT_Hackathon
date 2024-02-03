// import React from "react";
// import Quiz from "react-quiz-component";
// import { DemoQuiz } from "./Demoquiz";

// const QuizComponent = () => {
//   return (
//     <div className="max-w-2xl mx-auto my-8 p-8 bg-white rounded-md shadow-md">
//       <h2 className="text-3xl font-bold mb-6 text-gray-800">React Quiz</h2>
//       <div className="border-t border-gray-300 my-6"></div>

//       <Quiz quiz={DemoQuiz} timer={600} />
//     </div>
//   );
// };

// export default QuizComponent;
import React, { useState } from "react";

const QuizCreator = () => {
  const [quizTitle, setQuizTitle] = useState("");
  const [quizSynopsis, setQuizSynopsis] = useState("");
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    questionType: "text",
    answers: ["", "", "", ""],
    correctAnswer: "1",
    explanation: "",
    point: "10",
  });

  const handleQuizTitleChange = (e) => {
    setQuizTitle(e.target.value);
  };

  const handleQuizSynopsisChange = (e) => {
    setQuizSynopsis(e.target.value);
  };

  const handleQuestionChange = (e) => {
    setNewQuestion({
      ...newQuestion,
      [e.target.name]: e.target.value,
    });
  };

  const handleAnswerChange = (index, e) => {
    const updatedAnswers = [...newQuestion.answers];
    updatedAnswers[index] = e.target.value;
    setNewQuestion({
      ...newQuestion,
      answers: updatedAnswers,
    });
  };

  const handleAddQuestion = () => {
    if (
      !newQuestion.question ||
      newQuestion.answers.some((ans) => ans.trim() === "")
    ) {
      alert("Please fill in all question details");
      return;
    }

    setQuestions([...questions, newQuestion]);
    setNewQuestion({
      question: "",
      questionType: "text",
      answers: ["", "", "", ""],
      correctAnswer: "1",
      explanation: "",
      point: "10",
    });
  };

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const handleQuizSubmit = () => {
    const quizData = {
      quizTitle,
      quizSynopsis,
      questions,
    };
    // Now you can send quizData to your backend or use it as needed
    console.log("Submitted Quiz:", quizData);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Create Quiz</h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="quizTitle"
            className="block text-sm font-semibold text-gray-600"
          >
            Quiz Title:
          </label>
          <input
            type="text"
            id="quizTitle"
            name="quizTitle"
            value={quizTitle}
            onChange={handleQuizTitleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="quizSynopsis"
            className="block text-sm font-semibold text-gray-600"
          >
            Quiz Synopsis:
          </label>
          <textarea
            id="quizSynopsis"
            name="quizSynopsis"
            value={quizSynopsis}
            onChange={handleQuizSynopsisChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            rows="4"
            required
          />
        </div>

        {questions.map((question, index) => (
          <div key={index} className="mb-4 border p-4 rounded-md">
            <label
              htmlFor={`question-${index}`}
              className="block text-sm font-semibold text-gray-600"
            >
              Question {index + 1}:
            </label>
            <input
              type="text"
              id={`question-${index}`}
              name={`question-${index}`}
              value={question.question}
              onChange={(e) => handleQuestionChange(index, e)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />

            <label className="block mt-2 text-sm font-semibold text-gray-600">
              Answers:
            </label>
            {question.answers.map((answer, ansIndex) => (
              <input
                key={ansIndex}
                type="text"
                value={answer}
                onChange={(e) => handleAnswerChange(ansIndex, e)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            ))}

            <label
              htmlFor={`correctAnswer-${index}`}
              className="block mt-2 text-sm font-semibold text-gray-600"
            >
              Correct Answer:
            </label>
            <select
              id={`correctAnswer-${index}`}
              name={`correctAnswer-${index}`}
              value={question.correctAnswer}
              onChange={(e) => handleQuestionChange(index, e)}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            >
              {question.answers.map((_, ansIndex) => (
                <option
                  key={ansIndex}
                  value={String(ansIndex + 1)}
                >{`Option ${ansIndex + 1}`}</option>
              ))}
            </select>

            <label
              htmlFor={`explanation-${index}`}
              className="block mt-2 text-sm font-semibold text-gray-600"
            >
              Explanation:
            </label>
            <textarea
              id={`explanation-${index}`}
              name={`explanation-${index}`}
              value={question.explanation}
              onChange={(e) => handleQuestionChange(index, e)}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              rows="2"
            />

            <button
              type="button"
              onClick={() => handleRemoveQuestion(index)}
              className="mt-4 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
            >
              Remove Question
            </button>
          </div>
        ))}

        <div className="mt-6">
          <button
            type="button"
            onClick={handleAddQuestion}
            className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
          >
            Add Question
          </button>
        </div>

        <div className="mt-6">
          <button
            type="button"
            onClick={handleQuizSubmit}
            className="px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit Quiz
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuizCreator;
