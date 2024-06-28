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

const Select = styled.select`
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

const BrakesPage = () => {
  return (
    <Container>
      <Title>Brakes Inspection</Title>
      <Label>Brake Fluid Level:</Label>
      <Select>
        <option>Good</option>
        <option>Ok</option>
        <option>Low</option>
      </Select>

      <Label>Brake Condition for Front:</Label>
      <Select>
        <option>Good</option>
        <option>Ok</option>
        <option>Needs Replacement</option>
      </Select>

      <Label>Brake Condition for Rear:</Label>
      <Select>
        <option>Good</option>
        <option>Ok</option>
        <option>Needs Replacement</option>
      </Select>

      <Label>Emergency Brake:</Label>
      <Select>
        <option>Good</option>
        <option>Ok</option>
        <option>Low</option>
      </Select>

      <Label>Brake Overall Summary:</Label>
      <TextArea rows="4" placeholder="Enter summary (up to 1000 characters)" />

      <Label>Attach images:</Label>
      <Input type="file" multiple />
    </Container>
  );
};

export default BrakesPage;
