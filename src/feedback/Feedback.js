import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

function Feedback({ timerState }) {
  return (
    <div>
      {/* TODO: This area should show only when a focus or break session is running or pauses */}
      <div className="row mb-2">
        <div className="col">
          {/* (x)TODO: Update message below to include current session (Focusing or On Break) and total duration */}
          <h2 data-testid="session-title">Focusing for {secondsToDuration(timerState.focusDuration)} minutes</h2>
          {/* (x)TODO: Update message below to include time remaining in the current session */}
          <p className="lead" data-testid="session-sub-title">
          {secondsToDuration(timerState.remainingTime)} remaining
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
  );
}

export default Feedback;
