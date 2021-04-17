import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import Setup from "../setup/Setup";
import Controls from "../controls/Controls";
import Feedback from "../feedback/Feedback";

function Pomodoro() {
  const [timerState, setTimerState] = useState({
    focusDuration: 1500,
    breakDuration: 300,
    focusing: true,
    // isTimerRunning: false,
    remainingTime: 1500,
  });

  console.log({ ...timerState });

  //! This state was provided by starter code, not sure if I can absorb it into my timerState or if that will break tests. Check back later
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
      <Setup timerState={timerState} setTimerState={setTimerState} />
      <Controls
        playPause={playPause}
        isTimerRunning={isTimerRunning}
        setTimerState={setTimerState}
      />
      <Feedback timerState={timerState} />
    </div>
  );
}

export default Pomodoro;
