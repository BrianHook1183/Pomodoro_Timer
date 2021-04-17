import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import Setup from "../setup/Setup";
import Controls from "../controls/Controls";
import Feedback from "../feedback/Feedback";

function Pomodoro() {
  const [timerState, setTimerState] = useState({
    focusDuration: 1500,
    breakDuration: 300,
    focusing: false,
    breaking: false,
    remainingTime: 1500,
  });
  //! focusing/breaking could be combined to a single variable called activeSessionType (= "focus", "break" or null).

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
    const { focusing, breaking } = timerState;
    // First press play
    if (!focusing && !breaking) {
      setIsTimerRunning((prevState) => !prevState);
      setTimerState({
        ...timerState,
        ["focusing"]: true,
      });
    }
    // toggle play during focus or break
    if (focusing || breaking) {
      setIsTimerRunning((prevState) => !prevState);
    }
  }

  function stopTimer() {
    setIsTimerRunning(false);
    setTimerState({
      ...timerState,
      ["focusing"]: false,
      ["breaking"]: false,
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
