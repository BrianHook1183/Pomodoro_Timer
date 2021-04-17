import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

function BreakDuration({ timerState, decrement, increment }) {
  const { breakDuration, currentMode } = timerState;
  return (
    <div className="col">
      <div className="float-right">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-break">
            Break Duration: {secondsToDuration(breakDuration)}
          </span>
          <div className="input-group-append">
            {/* TODO: disable during a focus or break session*/}
            <button
              onClick={() => decrement("breakDuration")}
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-break"
              disabled={currentMode}
            >
              <span className="oi oi-minus" />
            </button>
            {/* TODO: disable during a focus or break session*/}
            <button
              onClick={() => increment("breakDuration")}
              type="button"
              className="btn btn-secondary"
              data-testid="increase-break"
              disabled={currentMode}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreakDuration;
