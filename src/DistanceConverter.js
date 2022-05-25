import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 10px;
  padding: 40px;
  width: max-content;
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.backgroundColor};
`;

const H1 = styled.h1`
  margin: 0;
  margin-bottom: 30px;
  text-align: center;
`;

const ValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

const Label = styled.label`
  font-weight: 600;
  color: #0a174e;
`;

const Input = styled.input.attrs({ type: "number" })`
  margin-left: 5px;
  outline: none;
  border: none;
  padding: 8px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin: 0px 5px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  &:hover {
    background-color: #0a174e99;
    transition: all 0.7s;
  }
`;

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
    <Container>
      <H1>Distance Converter</H1>
      <ValueContainer>
        <Label>Kilometers:</Label>
        <Input
          value={invert ? (distance / 1000).toFixed(3) : distance}
          onChange={onChange}
          placeholder="Kilometers"
          disabled={invert}
        />
      </ValueContainer>
      <ValueContainer>
        <Label>Meters:</Label>
        <Input
          onChange={onChange}
          value={invert ? distance : distance * 1000}
          placeholder="Meters"
          disabled={!invert}
        />
      </ValueContainer>
      <BtnContainer>
        <Button onClick={onClick}>Invert</Button>
        <Button onClick={onReset}>Reset</Button>
      </BtnContainer>
    </Container>
  );
}

export default DistanceConverter;
