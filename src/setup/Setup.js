import React from "react";
import FocusDuration from "./FocusDuration";
import BreakDuration from "./BreakDuration";
import DemoSettings from "./DemoSettings";

function Setup({
  decrement,
  increment,
  displayDuration,
  breakDuration,
  focusDuration,
  currentMode,
  demoSettings,
  isTimerRunning,
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
      <DemoSettings demoSettings={demoSettings} />
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
