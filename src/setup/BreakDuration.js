import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

function BreakDuration({ timerState, setTimerState }) {
  const { breakDuration } = timerState;
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
              onClick={() =>
                setTimerState({
                  ...timerState,
                  ["breakDuration"]: breakDuration - 60,
                })
              }
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-break"
            >
              <span className="oi oi-minus" />
            </button>
            {/* TODO: disable during a focus or break session*/}
            <button
              onClick={() =>
                setTimerState({
                  ...timerState,
                  ["breakDuration"]: breakDuration + 60,
                })
              }
              type="button"
              className="btn btn-secondary"
              data-testid="increase-break"
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
