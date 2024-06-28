// Components/ExteriorPage.js
import React from 'react';
import styled from 'styled-components';

const ExteriorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const QuestionGroup = styled.div`
  margin: 15px 0;
  width: 100%;
  max-width: 600px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const RadioGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const FileInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ExteriorPage = () => {
  return (
    <ExteriorContainer>
      <h2>Exterior Inspection</h2>

      <QuestionGroup>
        <Label>Rust, Dent or Damage to Exterior</Label>
        <RadioGroup>
          <RadioLabel>
            <input type="radio" name="exteriorDamage" value="Yes" /> Yes
          </RadioLabel>
          <RadioLabel>
            <input type="radio" name="exteriorDamage" value="No" /> No
          </RadioLabel>
        </RadioGroup>
        <Label>If yes, explain in notes</Label>
        <Textarea rows="4" placeholder="Enter notes here" />
        <Label>Attach images</Label>
        <FileInput type="file" accept="image/*" multiple />
      </QuestionGroup>

      <QuestionGroup>
        <Label>Oil Leak in Suspension</Label>
        <RadioGroup>
          <RadioLabel>
            <input type="radio" name="oilLeak" value="Yes" /> Yes
          </RadioLabel>
          <RadioLabel>
            <input type="radio" name="oilLeak" value="No" /> No
          </RadioLabel>
        </RadioGroup>
      </QuestionGroup>

      <QuestionGroup>
        <Label>Overall Summary</Label>
        <Textarea rows="4" placeholder="Enter summary here (max 1000 characters)" />
      </QuestionGroup>

      <QuestionGroup>
        <Label>Attached Images</Label>
        <FileInput type="file" accept="image/*" multiple />
      </QuestionGroup>
    </ExteriorContainer>
  );
};

export default ExteriorPage;
