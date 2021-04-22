import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import { secondsToDuration, minutesToDuration } from "../utils/duration";
import Setup from "../setup/Setup";
import Controls from "../controls/Controls";
import Feedback from "../feedback/Feedback";

function Pomodoro() {
  //TODO (1) improvements: currentMode could be absorbed into each of focusDuration and breakDuration as {active: boolean}. this would fix propTypes as well. If i DON'T do this, then do "todo (2)"
  //TODO (2) propType for currentMode could be a string, and set default state as null instead of false. That way i'm not mixing up types (will always be a string after taken out of its default null) 
  const [timerState, setTimerState] = useState({
    focusDuration: { set: 1500, min: 300, max: 3600 },
    breakDuration: { set: 300, min: 60, max: 900 },
    currentMode: false,
    remainingTime: null,
  });
  //Destructuring
  const { remainingTime, currentMode } = timerState;
  const focusDuration = timerState["focusDuration"].set;
  const breakDuration = timerState["breakDuration"].set;

  //! isTimerRunning was provided by starter code, might absorb into timerState later if it doesn't affect Qualified tests and I can figure out using prevState on nested object
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  function limitAdjust(newTime, min, max) {
    return newTime < min ? min : (newTime > max ? max : newTime);
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

  function displayDuration(duration) {
    return duration >= 3600
      ? minutesToDuration(duration / 60)
      : secondsToDuration(duration);
  }

  function toggleMode(mode, focusing, breaking) {
    return (mode == focusing && breaking) || focusing;
  }

  useInterval(
    () => {
      // countdown
      if (remainingTime > 0) {
        setTimerState({
          ...timerState,
          ["remainingTime"]: remainingTime - 1,
        });
      }

      // Play alarm and switch modes
      if (remainingTime === 0) {
        new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();

        const otherMode = toggleMode(currentMode, "focusing", "breaking");

        const otherDuration =
          otherMode == "focusing" ? focusDuration : breakDuration;

        setTimerState({
          ...timerState,
          ["currentMode"]: otherMode,
          ["remainingTime"]: otherDuration,
        });
      }
    },
    isTimerRunning ? 1000 : null
  );

  function playPause() {
    // Initial press of play
    if (!currentMode) {
      setIsTimerRunning((prevState) => !prevState);
      setTimerState({
        ...timerState,
        ["currentMode"]: "focusing",
        ["remainingTime"]: focusDuration,
      });
    }
    // toggle play/pause during active mode
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

  function demoSettings() {
     console.log("success");
     setTimerState({
      ...timerState,
      focusDuration: { set: 5, min: 3, max: 10 },
      breakDuration: { set: 3, min: 2, max: 5 },
    });
  }

  return (
    <div className="pomodoro">
      <Setup
        decrement={adjust}
        increment={adjust}
        displayDuration={displayDuration}
        focusDuration={focusDuration}
        breakDuration={breakDuration}
        currentMode={currentMode}
        demoSettings={demoSettings}
        isTimerRunning={isTimerRunning}
      />
      <Controls
        isTimerRunning={isTimerRunning}
        playPause={playPause}
        currentMode={currentMode}
        stopTimer={stopTimer}
      />
      <Feedback
        isTimerRunning={isTimerRunning}
        displayDuration={displayDuration}
        remainingTime={remainingTime}
        currentMode={currentMode}
        focusDuration={focusDuration}
        breakDuration={breakDuration}
      />
    </div>
  );
}

export default Pomodoro;
