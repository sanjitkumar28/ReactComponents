import { useState } from "react";

const CountDownTimer = () => {
  const [time, setTime] = useState({
    hour: 0,
    min: 0,
    sec: 0,
  });

  const handleTimeChange = (e, field) => {
    setTime((prev) => {
      return { ...prev, [field]: e.target.value };
    });
  };
  return (
    <div>
      <input
        placeholder="hh"
        value={time.hour}
        onChange={(e) => handleTimeChange(e, "hour")}
      />
      <input
        placeholder="mm"
        value={time.min}
        onChange={(e) => handleTimeChange(e, "min")}
      />
      <input
        placeholder="ss"
        value={time.sec}
        onChange={(e) => handleTimeChange(e, "sec")}
      />
     <div>
        <button> Start</button>
      <button> Stop</button>
      <button> Pause</button>
     </div>
      
    </div>
  );
};
export default CountDownTimer;