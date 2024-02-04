import React from "react";
// import Quiz from "react-quiz-component";
import DemoQuiz from "./Demoquiz";

export const QuizComponent = () => {
  return (
    <div className="max-w-2xl mx-auto my-8 p-8 bg-white rounded-md shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">React Quiz</h2>
      <div className="border-t border-gray-300 my-6"></div>

      {/* <Quiz quiz={DemoQuiz} timer={600} /> */}
    </div>
  );
};

export default QuizComponent;
