import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

function Feedback({ timerState, isTimerRunning }) {
  const { focusing, focusDuration, remainingTime } = timerState;
  const status = focusing ? "Focusing" : "On Break";

  return (
    // This area only shows when a focus or break session is running or pauses
    isTimerRunning && (
      <div>
        <div className="row mb-2">
          <div className="col">
            <h2 data-testid="session-title">
              {status} for {secondsToDuration(focusDuration)} minutes
            </h2>
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(remainingTime)} remaining
            </p>
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
