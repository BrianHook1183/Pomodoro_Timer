import React from "react";
import FocusDuration from "./FocusDuration";
import BreakDuration from "./BreakDuration";

function Setup({
  decrement,
  increment,
  displayDuration,
  breakDuration,
  focusDuration,
  currentMode,
}) {
  return (
    <div className="row">
      <FocusDuration
        decrement={decrement}
        increment={increment}
        displayDuration={displayDuration}
        currentMode={currentMode}
        focusDuration={focusDuration}
      />
      <BreakDuration
        decrement={decrement}
        increment={increment}
        displayDuration={displayDuration}
        currentMode={currentMode}
        breakDuration={breakDuration}
      />
    </div>
  );
}

export default Setup;
