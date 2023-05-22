import { useState } from "react";
import QuizContext from "../context/QuizContext";

function QuizProvider({ children }) {
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [hasEnded, setHasEnded] = useState(false);

  const questions = [
    {
      question: "What is the result of typeof null in JavaScript?",
      choices: ["object", "null", "undefined", "string"],
      answer: ["object"],
    },
    {
      question: "Which of the following is not a JavaScript data type?",
      choices: ["string", "boolean", "number", "array"],
      answer: ["array"],
    },
    {
      question: "What does the '===' operator do in JavaScript?",
      choices: [
        "Checks for equality, including type",
        "Checks for equality, ignoring type",
        "Assigns a value to a variable",
        "Performs a logical OR operation",
      ],
      answer: ["Checks for equality, including type"],
    },
    {
      question: "What is the purpose of the 'this' keyword in JavaScript?",
      choices: [
        "It refers to the current function",
        "It refers to the parent object",
        "It refers to the global object",
        "It refers to the HTML document",
      ],
      answer: ["It refers to the parent object"],
    },
    {
      question: "What is the correct way to declare a JavaScript variable?",
      choices: ["var x;", "variable x;", "let x;", "const x;"],
      answer: ["let x;"],
    },
    {
      question: "What is the result of 10 + '20' in JavaScript?",
      choices: ["30", "1020", "102010", "Error"],
      answer: ["1020"],
    },
    {
      question:
        "What is the purpose of the 'forEach' method in JavaScript arrays?",
      choices: [
        "To add elements to an array",
        "To remove elements from an array",
        "To loop over the elements of an array",
        "To sort the elements of an array",
      ],
      answer: ["To loop over the elements of an array"],
    },
    {
      question: "What is the scope of a variable declared with 'var' keyword?",
      choices: [
        "Global scope",
        "Local scope within the function it is declared",
        "Local scope within the block it is declared",
        "It depends on the context",
      ],
      answer: ["Global scope"],
    },
    {
      question:
        "What is the purpose of the 'slice' method in JavaScript arrays?",
      choices: [
        "To remove elements from an array",
        "To add elements to an array",
        "To extract a portion of an array",
        "To concatenate arrays",
      ],
      answer: "To extract a portion of an array",
    },
    {
      question: "What is the result of '5' + 2 in JavaScript?",
      choices: ["7", "52", "NaN", "Error"],
      answer: ["52"],
    },
  ];

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setHasEnded(false);
  };

  const value = {
    score,
    setScore,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    hasEnded,
    setHasEnded,
    questions,
    restartQuiz,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export default QuizProvider;
