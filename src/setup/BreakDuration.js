import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

function BreakDuration({ timerState, setTimerState }) {
  return (
    <div className="col">
      <div className="float-right">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-break">
            {/* (x)TODO: Update this text to display the current break session duration */}
            Break Duration: {secondsToDuration(timerState.breakDuration)}
          </span>
          <div className="input-group-append">
            {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
            <button
              onClick={() =>
                setTimerState({
                  ...timerState,
                  ["breakDuration"]: timerState["breakDuration"] - 1,
                })
              }
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-break"
            >
              <span className="oi oi-minus" />
            </button>
            {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
            <button
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
