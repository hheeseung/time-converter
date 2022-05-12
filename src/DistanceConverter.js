import { useState } from "react";
import "./Converter.css";

function DistanceConverter() {
  const [distance, setDistance] = useState("");
  const onChange = (event) => setDistance(event.target.value);

  const onReset = () => setDistance("");

  const [invert, setInvert] = useState(false);
  const onClick = () => {
    onReset();
    setInvert((current) => !current);
  };
  return (
    <div className="converter-container">
      <h1>Distance Converter</h1>
      <div className="value-container">
        <label>Kilometers:</label>
        <input
          value={invert ? (distance / 1000).toFixed(3) : distance}
          onChange={onChange}
          type="number"
          placeholder="Kilometers"
          disabled={invert}
        />
      </div>
      <div className="value-container">
        <label>Meters:</label>
        <input
          onChange={onChange}
          value={invert ? distance : distance * 1000}
          type="number"
          placeholder="Meters"
          disabled={!invert}
        />
      </div>
      <div className="button-container">
        <button onClick={onClick}>Invert</button>
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  );
}

export default DistanceConverter;
