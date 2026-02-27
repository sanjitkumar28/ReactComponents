import { useEffect, useRef, useState } from "react";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const startTimeRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      clearInterval(timerRef.current);

      timerRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 100);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  };

  const stop = () => setIsRunning(false);

  const reset = () => {
    setIsRunning(false);
    setElapsedTime(0);
    startTimeRef.current = null;
  };

  const formatTime = () => {
    const hours = String(Math.floor(elapsedTime / 3600000)).padStart(2, "0");
    const min = String(Math.floor((elapsedTime / 60000) % 60)).padStart(2, "0");
    const sec = String(Math.floor((elapsedTime / 1000) % 60)).padStart(2, "0");

    return `${hours}:${min}:${sec}`;
  };

  return (
    <div>
      <div>{formatTime()}</div>
      <button onClick={start} disabled={isRunning}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Stopwatch;