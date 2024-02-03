// export const DemoQuiz = {
//   quizTitle: "React Quiz Demo",
//   quizSynopsis:
//     "Test your knowledge about React with this quick demo quiz. Have fun!",
//   nrOfQuestions: 3,
//   questions: [
//     {
//       question: "What does JSX stand for?",
//       questionType: "text",
//       answerSelectionType: "single",
//       answers: [
//         "JavaScript XML",
//         "Java Syntax Extension",
//         "Jupyter Syntax Extension",
//       ],
//       correctAnswer: "1",
//       explanation: "JSX stands for JavaScript XML.",
//       point: "10",
//     },
//     {
//       question:
//         "In React, what is used to pass data to a component from outside?",
//       questionType: "text",
//       answerSelectionType: "single",
//       answers: ["setState", "props", "state", "render"],
//       correctAnswer: "2",
//       explanation: "Props are used to pass data to a component in React.",
//       point: "10",
//     },
//     {
//       question:
//         "Which lifecycle method is called after a component is rendered?",
//       questionType: "text",
//       answerSelectionType: "single",
//       answers: [
//         "componentDidMount",
//         "componentWillUnmount",
//         "render",
//         "componentDidUpdate",
//       ],
//       correctAnswer: "1",
//       explanation: "componentDidMount is called after a component is rendered.",
//       point: "10",
//     },
//   ],
// };

// // import React, { useState } from "react";

// // export const DemoQuiz = () => {
// //   const [question, setQuestion] = useState("");
// //   const [options, setOptions] = useState(["", "", "", ""]);
// //   const [correctAnswer, setCorrectAnswer] = useState("");
// //   const [questionsList, setQuestionsList] = useState([]); // Initialize as empty array

// //   const handleOptionChange = (index, value) => {
// //     const updatedOptions = [...options];
// //     updatedOptions[index] = value;
// //     setOptions(updatedOptions);
// //   };

// //   const handleAddQuestion = () => {
// //     if (
// //       question.trim() === "" ||
// //       options.some((opt) => opt.trim() === "") ||
// //       correctAnswer.trim() === ""
// //     ) {
// //       alert("Please fill in all fields");
// //       return;
// //     }

// //     const newQuestion = {
// //       question,
// //       options,
// //       correctAnswer,
// //     };

// //     setQuestionsList([...questionsList, newQuestion]);

// //     // Reset form fields
// //     setQuestion("");
// //     setOptions(["", "", "", ""]);
// //     setCorrectAnswer("");
// //   };

// //   const handleRemoveQuestion = (index) => {
// //     const updatedQuestionsList = [...questionsList];
// //     updatedQuestionsList.splice(index, 1);
// //     setQuestionsList(updatedQuestionsList);
// //   };

// //   const handleQuizSubmit = () => {
// //     // You can submit the questionsList to your backend or use it as needed
// //     console.log("Submitted Quiz:", questionsList);
// //   };

// //   return (
// //     <div>
// //       <h2>Create Quiz</h2>
// //       <div>
// //         <label>Question:</label>
// //         <input
// //           type="text"
// //           value={question}
// //           onChange={(e) => setQuestion(e.target.value)}
// //         />
// //       </div>

// //       <div>
// //         <label>Options:</label>
// //         {options.map((opt, index) => (
// //           <div key={index}>
// //             <input
// //               type="text"
// //               value={opt}
// //               onChange={(e) => handleOptionChange(index, e.target.value)}
// //             />
// //           </div>
// //         ))}
// //       </div>

// //       <div>
// //         <label>Correct Answer:</label>
// //         <input
// //           type="text"
// //           value={correctAnswer}
// //           onChange={(e) => setCorrectAnswer(e.target.value)}
// //         />
// //       </div>

// //       <button onClick={handleAddQuestion}>Add Question</button>

// //       <div>
// //         <h3>Questions List:</h3>
// //         <ul>
// //           {questionsList.map((q, index) => (
// //             <li key={index}>
// //               <strong>{q.question}</strong>
// //               <ul>
// //                 {q.options.map((opt, i) => (
// //                   <li key={i}>{opt}</li>
// //                 ))}
// //               </ul>
// //               <p>Correct Answer: {q.correctAnswer}</p>
// //               <button onClick={() => handleRemoveQuestion(index)}>
// //                 Remove
// //               </button>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>

// //       <button onClick={handleQuizSubmit}>Submit Quiz</button>
// //     </div>
// //   );
// // };

// export default DemoQuiz;

// quiz.js

export const DemoQuiz = {
  quizTitle: "React Quiz Demo",
  quizSynopsis:
    "Test your knowledge about React with this quick demo quiz. Have fun!",
  nrOfQuestions: 3,
  questions: [
    {
      question: "What does JSX stand for?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "JavaScript XML",
        "Java Syntax Extension",
        "Jupyter Syntax Extension",
      ],
      correctAnswer: "1",
      explanation: "JSX stands for JavaScript XML.",
      point: "10",
    },
    {
      question:
        "In React, what is used to pass data to a component from outside?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["setState", "props", "state", "render"],
      correctAnswer: "2",
      explanation: "Props are used to pass data to a component in React.",
      point: "10",
    },
    {
      question:
        "Which lifecycle method is called after a component is rendered?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "componentDidMount",
        "componentWillUnmount",
        "render",
        "componentDidUpdate",
      ],
      correctAnswer: "1",
      explanation: "componentDidMount is called after a component is rendered.",
      point: "10",
    },
  ],
};
