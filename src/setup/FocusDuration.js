import React from "react";

function FocusDuration({
  decrement,
  increment,
  displayDuration,
  focusDuration,
  currentMode,
}) {
  return (
    <div className="col">
      <div className="input-group input-group-lg mb-2">
        <span className="input-group-text" data-testid="duration-focus">
          Focus Duration: {displayDuration(focusDuration)}
        </span>
        <div className="input-group-append">
          <button
            onClick={() => decrement("focusDuration", -300)}
            type="button"
            className="btn btn-secondary"
            data-testid="decrease-focus"
            disabled={currentMode}
          >
            <span className="oi oi-minus" />
          </button>
          <button
            onClick={() => increment("focusDuration", 300)}
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
