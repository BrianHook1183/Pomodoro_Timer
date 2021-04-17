import React from "react";
import FocusDuration from "./FocusDuration";
import BreakDuration from "./BreakDuration";

function Setup({ timerState, decrement, increment }) {
  return (
    <div className="row">
      <FocusDuration
        timerState={timerState}
        decrement={decrement}
        increment={increment}
      />
      <BreakDuration
        timerState={timerState}
        decrement={decrement}
        increment={increment}
      />
    </div>
  );
}

export default Setup;
