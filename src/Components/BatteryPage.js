
import React from 'react';
import styled from 'styled-components';

const BatteryContainer = styled.div`
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

const Dropdown = styled.select`
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

const BatteryPage = () => {
  return (
    <BatteryContainer>
      <h2>Battery Inspection</h2>

      <QuestionGroup>
        <Label>Battery Make</Label>
        <Input type="text" placeholder="Enter battery make (e.g., CAT, ABC, XYZ)" />
      </QuestionGroup>

      <QuestionGroup>
        <Label>Battery Replacement Date</Label>
        <Input type="date" />
      </QuestionGroup>

      <QuestionGroup>
        <Label>Battery Voltage</Label>
        <Input type="text" placeholder="Enter battery voltage (e.g., 12V, 13V)" />
      </QuestionGroup>

      <QuestionGroup>
        <Label>Battery Water Level</Label>
        <Dropdown>
          <option value="Good">Good</option>
          <option value="Ok">Ok</option>
          <option value="Low">Low</option>
        </Dropdown>
      </QuestionGroup>

      <QuestionGroup>
        <Label>Condition of Battery (Any damage)</Label>
        <RadioGroup>
          <RadioLabel>
            <input type="radio" name="damage" value="Yes" /> Yes
          </RadioLabel>
          <RadioLabel>
            <input type="radio" name="damage" value="No" /> No
          </RadioLabel>
        </RadioGroup>
        <Label>If yes, attach image</Label>
        <FileInput type="file" accept="image/*" />
      </QuestionGroup>

      <QuestionGroup>
        <Label>Any Leak / Rust in Battery</Label>
        <RadioGroup>
          <RadioLabel>
            <input type="radio" name="leak" value="Yes" /> Yes
          </RadioLabel>
          <RadioLabel>
            <input type="radio" name="leak" value="No" /> No
          </RadioLabel>
        </RadioGroup>
      </QuestionGroup>

      <QuestionGroup>
        <Label>Battery Overall Summary</Label>
        <Textarea rows="4" placeholder="Enter summary here (max 1000 characters)" />
      </QuestionGroup>

      <QuestionGroup>
        <Label>Attached Images</Label>
        <FileInput type="file" accept="image/*" multiple />
      </QuestionGroup>
    </BatteryContainer>
  );
};

export default BatteryPage;
