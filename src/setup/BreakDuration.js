import React from "react";

function BreakDuration({
  decrement,
  increment,
  displayDuration,
  breakDuration,
  currentMode,
}) {
  return (
    <div className="col">
      <div className="float-right">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-break">
            Break Duration: {displayDuration(breakDuration)}
          </span>
          <div className="input-group-append">
            <button
              onClick={() => decrement("breakDuration", -60)}
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-break"
              disabled={currentMode}
            >
              <span className="oi oi-minus" />
            </button>
            <button
              onClick={() => increment("breakDuration", 60)}
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
