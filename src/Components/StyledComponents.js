import styled from "styled-components";
import { Link } from "react-router-dom";


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

const LoginBox = styled.div`
  width: 300px;
  padding: 40px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const OptionList = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Option = styled(Link)`
  padding: 20px;
  background: #007bff;
  color: white;
  border-radius: 10px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #0056b3;
  }
`;
