import React from "react";
import Quiz from "react-quiz-component";
import DemoQuiz from "./Demoquiz";
import "./QuizComponent.css";

export const QuizComponent = () => {
  return (
    <div className="h-screen quiz-container">
      <div
        className="mx-auto my-8 p-8 bg- rounded-md border-4 text-black shadow-md"
        id="quiz"
      >
        <h2 className="text-3xl font-bold mb-6 text-brown-400">React Quiz</h2>
        <div className="border-t border-gray-300 my-6"></div>

        <Quiz quiz={DemoQuiz} timer={600} />
      </div>
    </div>
  );
};

export default QuizComponent;
