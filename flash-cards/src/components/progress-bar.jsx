import "../css/progress-bar.css";

function ProgressBar({ progress, questionId, questionCount }) {
  return (
    <div className="progress-bar">
      <div className="progress-bar-info">
        <div className="progress-bar-wrapper">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <span className="percentage">{Math.floor(progress)}%</span>
      </div>
      <span className="question-count">
        {questionId} of {questionCount}
      </span>
    </div>
  );
}

export default ProgressBar;
