import React from "react";

function Feedback({ timerState, isTimerRunning, displayDuration }) {
  const {
    currentMode,
    focusDuration,
    breakDuration,
    remainingTime,
  } = timerState;
  const status = currentMode === "focusing" ? "Focusing" : "On Break";
  const duration =
    currentMode === "focusing" ? focusDuration.set : breakDuration.set;
  const isPaused = !isTimerRunning ? "Paused" : "~~>";
  const progress = (1 - remainingTime / duration) * 100;

  return (
    // This area only shows when a focus or break session is running or paused
    currentMode && (
      <div>
        <div className="row mb-2">
          <div className="col">
            <h2 data-testid="session-title">
              {status} for {displayDuration(duration)} minutes
            </h2>
            <p className="lead" data-testid="session-sub-title">
              {displayDuration(remainingTime)} remaining
            </p>
            <h2>{isPaused}</h2>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={progress}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Feedback;
