import { useState } from "react";
import DistanceConverter from "./DistanceConverter";
import TimeConverter from "./TimeConverter";
import "./App.css";

function App() {
  const [select, onSelect] = useState(0);
  const onChange = (event) => onSelect(event.target.value);
  return (
    <div className="App-container">
      <select className="selector" onChange={onChange}>
        <option value="0">Choose your unit</option>
        <option value="1">Time Converter</option>
        <option value="2">Distance Converter</option>
      </select>
      {select === "0" ? (
        <p>This is converter that you might use well.</p>
      ) : null}
      {select === "1" ? <TimeConverter /> : null}
      {select === "2" ? <DistanceConverter /> : null}
    </div>
  );
}

export default App;
