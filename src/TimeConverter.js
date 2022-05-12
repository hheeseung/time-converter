import { useState } from "react";
import "./Converter.css";

function TimeConverter() {
  const [time, setTime] = useState("");
  const onChange = (event) => setTime(event.target.value);

  const reset = () => setTime("");

  const [invert, setInvert] = useState(false);
  const onClick = () => {
    setTime(0);
    setInvert((current) => !current);
  };
  return (
    <div className="converter-container">
      <h1>Time Converter</h1>
      <div className="value-container">
        <label>Minutes:</label>
        <input
          value={invert ? time * 60 : time}
          onChange={onChange}
          type="number"
          placeholder="Minutes"
          disabled={invert}
        />
      </div>
      <div className="value-container">
        <label>Hours:</label>
        <input
          value={invert ? time : (time / 60).toFixed(1)}
          type="number"
          placeholder="Hours"
          onChange={onChange}
          disabled={!invert}
        />
      </div>
      <div className="button-container">
        <button onClick={onClick}>Invert</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default TimeConverter;
