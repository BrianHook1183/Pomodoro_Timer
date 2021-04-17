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
    isTimerRunning: false,
    remainingTime: 1500,
  });

  console.log({ ...timerState });

  //! isTimerRunning provided by starter code, might absorb into timerState
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useInterval(
    () => {
      // ToDo: Implement what should happen when the timer is running
      // setIsTimerRunning(true);
    },
    //! temp set to 100 from 1000 for debugging purposes
    isTimerRunning ? 100 : null
  );

  function playPause() {
    setIsTimerRunning((prevState) => !prevState);
  }

  return (
    <div className="pomodoro">
      <Setup timerState={timerState} setTimerState={setTimerState} />
      <Controls
        playPause={playPause}
        timerState={timerState}
        setTimerState={setTimerState}
      />
      <Feedback timerState={timerState} />
    </div>
  );
}

export default Pomodoro;
