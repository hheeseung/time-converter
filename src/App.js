import { useState } from "react";
import styled from "styled-components";
import DistanceConverter from "./DistanceConverter";
import TimeConverter from "./TimeConverter";

const Container = styled.div`
  margin: -8px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #f5d042;
  background-color: #0a174e;
  color: #f5d042;
  width: 300px;
  font-size: larger;
`;

const Paragraph = styled.p`
  font-size: x-large;
  font-weight: 600;
  color: #f5d042;
`;

function App() {
  const [select, onSelect] = useState(0);
  const onChange = (event) => onSelect(event.target.value);
  return (
    <Container>
      <Select onChange={onChange}>
        <option value="0">Choose your unit</option>
        <option value="1">Time Converter</option>
        <option value="2">Distance Converter</option>
      </Select>
      {select === "0" ? (
        <Paragraph>This is converter that you might use well.</Paragraph>
      ) : null}
      {select === "1" ? <TimeConverter /> : null}
      {select === "2" ? <DistanceConverter /> : null}
    </Container>
  );
}

export default App;
