import React from "react";
import FocusDuration from "./FocusDuration";
import BreakDuration from "./BreakDuration";

function Setup({ timerState, decrement, increment, displayDuration }) {
  return (
    <div className="row">
      <FocusDuration
        timerState={timerState}
        decrement={decrement}
        increment={increment}
        displayDuration={displayDuration}
      />
      <BreakDuration
        timerState={timerState}
        decrement={decrement}
        increment={increment}
        displayDuration={displayDuration}
      />
    </div>
  );
}

export default Setup;
