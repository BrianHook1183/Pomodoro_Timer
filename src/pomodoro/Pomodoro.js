import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import Setup from "../setup/Setup";
import Controls from "../controls/Controls";
import Feedback from "../feedback/Feedback";

function Pomodoro() {
  
/*   const [timerState, setTimerState] = useState({
    "focusDuration": '25:00',
    "breakDuration": '05:00',
    "isTimerRunning": false,
    "remainingTime":  '25:00'
  }); */
  
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useInterval(
    () => {
      // (x)ToDo: Implement what should happen when the timer is running
      setIsTimerRunning(true);
    },
    isTimerRunning ? 1000 : null
  );

  function playPause() {
    setIsTimerRunning((prevState) => !prevState);
  }

  return (
    <div className="pomodoro">
      <Setup />
      <Controls playPause={playPause} isTimerRunning={isTimerRunning} />
      <Feedback />
    </div>
  );
}

export default Pomodoro;
