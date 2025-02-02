import "../css/question.css";
import Confetti from "react-confetti";
import { RotateCcw } from "lucide-react";

function Question({
  toggleIsRevealAnswer,
  isRevealAnswer,
  previousQuestion,
  nextQuestion,
  question,
  isFinish,
  restart,
}) {
  return (
    <div className="question-card">
      <div className="question-wrapper">
        {isFinish ? (
          <div className="finish">
            <Confetti />
            You have completed all the questions
            <button className="restart" onClick={restart}>
              <RotateCcw />
            </button>
          </div>
        ) : (
          <div>
            <div className="question">
              <span>{question.question}</span>
            </div>
            <div className={`answer ${isRevealAnswer ? "show" : "hide"}`}>
              <span>{question.answer}</span>
            </div>
          </div>
        )}
      </div>
      <div className="controls">
        <button className="prev" onClick={previousQuestion} disabled={isFinish}>
          Prev
        </button>
        <button className="" onClick={toggleIsRevealAnswer} disabled={isFinish}>
          {" "}
          {isRevealAnswer ? "Hide Answer" : "Show Answer"}
        </button>
        <button className="next" onClick={nextQuestion} disabled={isFinish}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Question;
