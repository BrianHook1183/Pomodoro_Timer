import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

function Feedback({ timerState, isTimerRunning }) {
  const { currentMode, focusDuration, remainingTime } = timerState;
  const status = currentMode === "focusing" ? "Focusing" : "On Break";
  const isPaused = !isTimerRunning ? "Paused" : "~~>";

  return (
    // This area only shows when a focus or break session is running or paused
    currentMode && (
      <div>
        <div className="row mb-2">
          <div className="col">
            <h2 data-testid="session-title">
              {status} for {secondsToDuration(focusDuration)} minutes
            </h2>
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(remainingTime)} remaining
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
                aria-valuenow="0" // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: "0%" }} // TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Feedback;
