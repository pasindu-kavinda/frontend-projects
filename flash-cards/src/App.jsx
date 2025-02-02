import { useState } from "react";
import "./App.css";
import ProgressBar from "./components/progress-bar";
import Question from "./components/question";
import { useQuestion } from "./hooks/question-hook";

function App() {
  const {
    question,
    questionCount,
    progress,
    isFinish,
    questionId,
    nextQuestion,
    previousQuestion,
    isRevealAnswer,
    toggleIsRevealAnswer,
    restart,
  } = useQuestion();

  return (
    <div className="app">
      <div className="container">
        <h1>Flash Cards</h1>
        <ProgressBar
          progress={progress}
          questionId={questionId}
          questionCount={questionCount}
        />
        <Question
          toggleIsRevealAnswer={toggleIsRevealAnswer}
          isRevealAnswer={isRevealAnswer}
          previousQuestion={previousQuestion}
          nextQuestion={nextQuestion}
          question={question}
          isFinish={isFinish}
          restart={restart}
        />
      </div>
    </div>
  );
}

export default App;
