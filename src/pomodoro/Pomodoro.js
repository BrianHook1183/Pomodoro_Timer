import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import Setup from "../setup/Setup";
import Controls from "../controls/Controls";
import Feedback from "../feedback/Feedback";

function Pomodoro() {
  const [timerState, setTimerState] = useState({
    focusDuration: 1500,
    breakDuration: 300,
    currentMode: false,
    remainingTime: 1500,
  });

  //! isTimerRunning provided by starter code, might absorb into timerState
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  function decrement(focusOrBreak) {
    setTimerState({
      ...timerState,
      [focusOrBreak]: timerState[focusOrBreak] - 60,
    });
  }

  function increment(focusOrBreak) {
    setTimerState({
      ...timerState,
      [focusOrBreak]: timerState[focusOrBreak] + 60,
    });
  }

  useInterval(
    () => {
      // ToDo: Implement what should happen when the timer is running
      // setIsTimerRunning(true);
    },
    //! temp set to 100 from 1000 for debugging purposes
    isTimerRunning ? 100 : null
  );

  function playPause() {
    const { currentMode } = timerState;
    // First press play
    if (!currentMode) {
      setIsTimerRunning((prevState) => !prevState);
      setTimerState({
        ...timerState,
        ["currentMode"]: "focusing",
      });
    }
    // toggle play during focus or break
    if (currentMode) {
      setIsTimerRunning((prevState) => !prevState);
    }
  }

  function stopTimer() {
    setIsTimerRunning(false);
    setTimerState({
      ...timerState,
      ["currentMode"]: false,
    });
  }

  return (
    <div className="pomodoro">
      <Setup
        timerState={timerState}
        decrement={decrement}
        increment={increment}
      />
      <Controls
        isTimerRunning={isTimerRunning}
        playPause={playPause}
        timerState={timerState}
        stopTimer={stopTimer}
      />
      <Feedback timerState={timerState} isTimerRunning={isTimerRunning} />
    </div>
  );
}

export default Pomodoro;
