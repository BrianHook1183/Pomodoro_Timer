import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

function FocusDuration({ timerState, decrement, increment }) {
  const { focusDuration } = timerState;
  return (
    <div className="col">
      <div className="input-group input-group-lg mb-2">
        <span className="input-group-text" data-testid="duration-focus">
          Focus Duration: {secondsToDuration(focusDuration)}
        </span>
        <div className="input-group-append">
          {/* TODO: disable during a focus or break session */}
          <button
            onClick={() => decrement("focusDuration")}
            type="button"
            className="btn btn-secondary"
            data-testid="decrease-focus"
          >
            <span className="oi oi-minus" />
          </button>
          {/* TODO: disable during a focus or break session */}
          <button
            onClick={() => increment("focusDuration")}
            type="button"
            className="btn btn-secondary"
            data-testid="increase-focus"
          >
            <span className="oi oi-plus" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FocusDuration;
