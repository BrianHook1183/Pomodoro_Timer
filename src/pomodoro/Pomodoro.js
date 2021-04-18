import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import Setup from "../setup/Setup";
import Controls from "../controls/Controls";
import Feedback from "../feedback/Feedback";

function Pomodoro() {
  const [timerState, setTimerState] = useState({
    focusDuration: { set: 1500, min: 300, max: 3600 },
    breakDuration: { set: 300, min: 60, max: 900 },
    currentMode: false,
    remainingTime: null,
  });
  //! Improvements: currentMode could be absorbed into each of focusDuration and breakDuration as {active: boolean}

  //! isTimerRunning provided by starter code, might absorb into timerState
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  function limitAdjust(newTime, min, max) {
    return newTime < min ? min : newTime > max ? max : newTime;
  }

  function adjust(mode, adjustBy) {
    const newTime = timerState[mode].set + adjustBy;

    setTimerState({
      ...timerState,
      [mode]: {
        ...timerState[mode],
        set: limitAdjust(newTime, timerState[mode].min, timerState[mode].max),
      },
    });
  }

  useInterval(
    () => {
      // countdown
      if (timerState["remainingTime"] > 0) {
        setTimerState({
          ...timerState,
          ["remainingTime"]: timerState["remainingTime"] - 10,
        });
      }

      // Play alarm
      if (timerState["remainingTime"] == 0) {
        new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
      }

      // switch to break
      if (
        timerState["remainingTime"] == 0 &&
        timerState["currentMode"] === "focusing"
      ) {
        setTimerState({
          ...timerState,
          ["currentMode"]: "breaking",
          ["remainingTime"]: timerState["breakDuration"].set,
        });
      }

      // switch to focus
      if (
        timerState["remainingTime"] == 0 &&
        timerState["currentMode"] === "breaking"
      ) {
        setTimerState({
          ...timerState,
          ["currentMode"]: "focusing",
          ["remainingTime"]: timerState["focusDuration"].set,
        });
      }
    },
    //! temp set to 100 from 1000 for debugging purposes
    isTimerRunning ? 100 : null
  );

  function playPause() {
    const { currentMode } = timerState;
    // Initial press of play
    if (!currentMode) {
      setIsTimerRunning((prevState) => !prevState);
      setTimerState({
        ...timerState,
        ["currentMode"]: "focusing",
        ["remainingTime"]: timerState["focusDuration"].set,
      });
    }
    // toggle play/pause during active session
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
      <Setup timerState={timerState} decrement={adjust} increment={adjust} />
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
