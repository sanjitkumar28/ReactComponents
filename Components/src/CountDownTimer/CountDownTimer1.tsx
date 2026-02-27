import { useEffect, useRef, useState } from "react";

export default function CountDownTimer1() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);
  const targetTimeRef = useRef(null);

  // Convert to milliseconds
  const convertToMs = (h, m, s) => {
    const safeH = Math.max(0, h);
    const safeM = Math.max(0, m);
    const safeS = Math.max(0, s);

    return (safeH * 3600 + safeM * 60 + safeS) * 1000;
  };

  // Convert milliseconds → normalized HH MM SS
  const getTimeParts = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);

    return {
      hour: Math.floor(totalSeconds / 3600),
      minute: Math.floor((totalSeconds % 3600) / 60),
      second: totalSeconds % 60,
    };
  };

  const handleChange = (e, field) => {
    if (isRunning) return;

    const value = parseInt(e.target.value, 10);

    // Prevent negative & invalid input
    const safeValue = isNaN(value) || value < 0 ? 0 : value;

    const { hour, minute, second } = getTimeParts(timeLeft);

    const updated = {
      hour,
      minute,
      second,
      [field]: safeValue,
    };

    const totalMs = convertToMs(
      updated.hour,
      updated.minute,
      updated.second
    );

    setTimeLeft(totalMs);
  };

  const handleStart = () => {
    if (timeLeft <= 0) return;

    targetTimeRef.current = Date.now() + timeLeft;
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTimeLeft(0);
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        const remaining = targetTimeRef.current - Date.now();

        if (remaining <= 0) {
          clearInterval(intervalRef.current);
          setIsRunning(false);
          setTimeLeft(0);
        } else {
          setTimeLeft(remaining);
        }
      }, 100);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const { hour, minute, second } = getTimeParts(timeLeft);

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <input
          type="number"
          value={hour}
          onChange={(e) => handleChange(e, "hour")}
          disabled={isRunning}
          placeholder="HH"
        />
        :
        <input
          type="number"
          value={minute}
          onChange={(e) => handleChange(e, "minute")}
          disabled={isRunning}
          placeholder="MM"
        />
        :
        <input
          type="number"
          value={second}
          onChange={(e) => handleChange(e, "second")}
          disabled={isRunning}
          placeholder="SS"
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <button onClick={handleStart} disabled={isRunning}>
          Start
        </button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}