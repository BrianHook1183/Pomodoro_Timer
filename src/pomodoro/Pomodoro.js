import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import { secondsToDuration, minutesToDuration } from "../utils/duration";
import Setup from "../setup/Setup";
import Controls from "../controls/Controls";
import Feedback from "../feedback/Feedback";

function Pomodoro() {
  const [timerState, setTimerState] = useState({
    focusDuration: { set: 1500, min: 300, max: 3600 },
    breakDuration: { set: 300, min: 60, max: 900 },
    currentMode: null,
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

  function displayDuration(duration) {
    return duration >= 3600
      ? minutesToDuration(duration / 60)
      : secondsToDuration(duration);
  }

  //* logic for mode = focusing
  // "focusing"" === focusing // returns true
  // true &&  breaking // both truthy, returns right side: "breaking"
  // next step is now  "breaking" || "focusing" //  truthy or truthy returns left side because it is short circuited and doesn't even read the right side, so returns the final result: "breaking"

  ///*logic for mode = breaking
  //  "breaking" === focusing // returns false
  // causes short-circuit, moves on to:
  // false || focusing // (false or truthy) is false, and therefore will return the right side / truthy value, so final result is "focusing"
  function toggleMode(mode, focusing, breaking) {
    return (mode === focusing && breaking) || focusing;
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
        new Audio(`https://bigsoundbank.com/UPLOAD/mp3/2261.mp3`).play();

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
      ["currentMode"]: null,
    });
  }

  function demoSettings() {
    if (timerState["focusDuration"].min > 100) {
      setTimerState({
        ...timerState,
        focusDuration: { set: 5, min: 3, max: 10 },
        breakDuration: { set: 3, min: 2, max: 5 },
      });
    } else {
      setTimerState({
        ...timerState,
        focusDuration: { set: 1500, min: 300, max: 3600 },
        breakDuration: { set: 300, min: 60, max: 900 },
      });
    }
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
