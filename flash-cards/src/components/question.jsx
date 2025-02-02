import "../css/question.css";

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
            You have completed all the questions
            <button onClick={restart}>Start Over</button>
          </div>
        ) : (
          <div>
            <div className="question">{question.question}</div>
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
