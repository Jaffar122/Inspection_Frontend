


import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const RadioGroup = styled.div`
  display: flex;
  margin-top: 5px;

  label {
    margin-right: 15px;
  }
`;

const EnginePage = () => {
  return (
    <Container>
      <Title>Engine Inspection</Title>

      <Label>Rust, Dents or Damage in Engine:</Label>
      <RadioGroup>
        <label>
          <input type="radio" name="rustDentsDamage" value="yes" /> Yes
        </label>
        <label>
          <input type="radio" name="rustDentsDamage" value="no" /> No
        </label>
      </RadioGroup>

      <Label>Engine Oil Condition:</Label>
      <select>
        <option value="good">Good</option>
        <option value="bad">Bad</option>
      </select>

      <Label>Engine Oil Color:</Label>
      <Input type="text" placeholder="Enter color" />

      <Label>Brake Fluid Condition:</Label>
      <select>
        <option value="good">Good</option>
        <option value="bad">Bad</option>
      </select>

      <Label>Brake Fluid Color:</Label>
      <Input type="text" placeholder="Enter color" />

      <Label>Any oil leak in Engine:</Label>
      <RadioGroup>
        <label>
          <input type="radio" name="oilLeak" value="yes" /> Yes
        </label>
        <label>
          <input type="radio" name="oilLeak" value="no" /> No
        </label>
      </RadioGroup>

      <Label>Overall Summary:</Label>
      <TextArea rows="4" placeholder="Enter summary" />

      <Label>Attached Images:</Label>
      <Input type="file" multiple />
    </Container>
  );
};

export default EnginePage;
