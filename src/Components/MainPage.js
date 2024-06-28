import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Categories = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryLink = styled(Link)`
  margin-bottom: 10px;
  padding: 10px;
  background: #1890ff;
  color: white;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    background: #40a9ff;
  }
`;

const MainPage = () => {
  return (
    <Container>
      <Title>Inspection Categories</Title>
      <Categories>
        <CategoryLink to="/tire">Tire</CategoryLink>
        <CategoryLink to="/battery">Battery</CategoryLink>
        <CategoryLink to="/exterior">Exterior</CategoryLink>
        <CategoryLink to="/brakes">Brakes</CategoryLink>
        <CategoryLink to="/engine">Engine</CategoryLink>
        <CategoryLink to="/voice-of-customer">Voice of Customer</CategoryLink>
      </Categories>
    </Container>
  );
};

export default MainPage;
