import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
       <h1 className="flash">FlashCards</h1>
      <FlashCards />

     
    </div>
  );
}

const questions = [
  {
    id: 3257,
    question: "What language is react base on?",
    answer: "Javascript",
  },

  {
    id: 7336,
    question: "What are the build blocks for react app?",
    answer: "components",
  },
  {
    id: 8832,
    question:
      "What's the name of the syntax we use to describe a Ui React app ?",
    answer: "JSX",
  },
  {
    id: 1292,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchroised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
