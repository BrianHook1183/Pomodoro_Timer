import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import Setup from "../setup/Setup";
import Controls from "../controls/Controls";
import Feedback from "../feedback/Feedback";

function Pomodoro() {
  const [timerState, setTimerState] = useState({
    focusDuration: 300,
    breakDuration: 60,
    currentMode: false,
    remainingTime: null,
  });

  //! isTimerRunning provided by starter code, might absorb into timerState
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  function decrement(durationSetting) {
    setTimerState({
      ...timerState,
      [durationSetting]: timerState[durationSetting] - 60,
    });
  }

  function increment(durationSetting) {
    setTimerState({
      ...timerState,
      [durationSetting]: timerState[durationSetting] + 60,
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
          ["remainingTime"]: timerState["breakDuration"],
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
          ["remainingTime"]: timerState["focusDuration"],
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
        ["remainingTime"]: timerState["focusDuration"],
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
