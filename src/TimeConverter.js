import { useState } from "react";
import "./Style.css";

function TimeConverter() {
  const [time, setTime] = useState("");
  const onChange = (event) => setTime(event.target.value);

  const reset = () => setTime(0);

  const [convert, setConvert] = useState(false);
  const onClick = () => {
    setTime(0);
    setConvert((current) => !current);
  };
  return (
    <div className="container">
      <header>
        <h1>Time Converter</h1>
      </header>
      <main>
        <div className="time-container">
          <label>Minutes:</label>
          <input
            value={convert ? time * 60 : time}
            onChange={onChange}
            type="number"
            placeholder="Minutes"
            disabled={convert}
          />
        </div>
        <div className="time-container">
          <label>Hours:</label>
          <input
            value={convert ? time : (time / 60).toFixed(1)}
            type="number"
            placeholder="Hours"
            onChange={onChange}
            disabled={!convert}
          />
        </div>
        <div className="button-container">
          <button onClick={onClick}>Change Hours to Minutes Converter</button>
          <button onClick={reset}>Reset</button>
        </div>
      </main>
    </div>
  );
}

export default TimeConverter;
