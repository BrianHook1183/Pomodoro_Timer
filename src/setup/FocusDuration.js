import React from "react";
import { secondsToDuration } from "../utils/duration";

function FocusDuration({ timerState, decrement, increment }) {
  const { focusDuration, currentMode } = timerState;
  return (
    <div className="col">
      <div className="input-group input-group-lg mb-2">
        <span className="input-group-text" data-testid="duration-focus">
          Focus Duration: {secondsToDuration(focusDuration.set)}
        </span>
        <div className="input-group-append">
          {/* TODO: disable during a focus or break session */}
          <button
            onClick={() => decrement("focusDuration", -60)}
            type="button"
            className="btn btn-secondary"
            data-testid="decrease-focus"
            disabled={currentMode}
          >
            <span className="oi oi-minus" />
          </button>
          {/* TODO: disable during a focus or break session */}
          <button
            onClick={() => increment("focusDuration", 60)}
            type="button"
            className="btn btn-secondary"
            data-testid="increase-focus"
            disabled={currentMode}
          >
            <span className="oi oi-plus" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FocusDuration;
