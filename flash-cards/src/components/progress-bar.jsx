import "../css/progress-bar.css";

function ProgressBar({ progress, questionId, questionCount }) {
  return (
    <div className="progress-bar">
      <div className="progress-bar-info">
        <div className="progress" style={{ width: `${progress}%` }}></div>
        <span className="percentage">{progress}%</span>
      </div>
      <span className="question-count">
        {questionId} of {questionCount}
      </span>
    </div>
  );
}

export default ProgressBar;
