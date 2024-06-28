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

const VoiceOfCustomerPage = () => {
  return (
    <Container>
      <Title>Voice of Customer</Title>
      <Label>Any feedback from Customer:</Label>
      <TextArea rows="4" placeholder="Enter feedback here" />

      <Label>Images related to the issues discussed with customer:</Label>
      <Input type="file" multiple />
    </Container>
  );
};

export default VoiceOfCustomerPage;
