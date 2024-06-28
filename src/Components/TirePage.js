
import React from 'react';
import styled from 'styled-components';

const TireContainer = styled.div`
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

const TirePage = () => {
  return (
    <TireContainer>
      <h2>Tire Inspection</h2>
      
      <QuestionGroup>
        <Label>Tire Pressure for Left Front</Label>
        <Input type="number" placeholder="Enter pressure in PSI" />
      </QuestionGroup>
      
      <QuestionGroup>
        <Label>Tire Pressure for Right Front</Label>
        <Input type="number" placeholder="Enter pressure in PSI" />
      </QuestionGroup>
      
      <QuestionGroup>
        <Label>Tire Condition for Left Front</Label>
        <Dropdown>
          <option value="Good">Good</option>
          <option value="Ok">Ok</option>
          <option value="Needs Replacement">Needs Replacement</option>
        </Dropdown>
      </QuestionGroup>
      
      <QuestionGroup>
        <Label>Tire Condition for Right Front</Label>
        <Dropdown>
          <option value="Good">Good</option>
          <option value="Ok">Ok</option>
          <option value="Needs Replacement">Needs Replacement</option>
        </Dropdown>
      </QuestionGroup>
      
      <QuestionGroup>
        <Label>Tire Pressure for Left Rear</Label>
        <Input type="number" placeholder="Enter pressure in PSI" />
      </QuestionGroup>
      
      <QuestionGroup>
        <Label>Tire Pressure for Right Rear</Label>
        <Input type="number" placeholder="Enter pressure in PSI" />
      </QuestionGroup>
      
      <QuestionGroup>
        <Label>Tire Condition for Left Rear</Label>
        <Dropdown>
          <option value="Good">Good</option>
          <option value="Ok">Ok</option>
          <option value="Needs Replacement">Needs Replacement</option>
        </Dropdown>
      </QuestionGroup>
      
      <QuestionGroup>
        <Label>Tire Condition for Right Rear</Label>
        <Dropdown>
          <option value="Good">Good</option>
          <option value="Ok">Ok</option>
          <option value="Needs Replacement">Needs Replacement</option>
        </Dropdown>
      </QuestionGroup>
      
      <QuestionGroup>
        <Label>Overall Tire Summary</Label>
        <Textarea rows="4" placeholder="Enter summary here (max 1000 characters)" />
      </QuestionGroup>
      
      <QuestionGroup>
        <Label>Attached images of each tire in the same order</Label>
        <FileInput type="file" accept="image/*" multiple />
      </QuestionGroup>
    </TireContainer>
  );
};

export default TirePage;
