import React from "react";
import FocusDuration from "./FocusDuration";
import BreakDuration from "./BreakDuration";

function Setup({ timerState, setTimerState }) {
  return (
    <div className="row">
      <FocusDuration timerState={timerState} setTimerState={setTimerState} />
      <BreakDuration timerState={timerState} setTimerState={setTimerState} />
    </div>
  );
}

export default Setup;
