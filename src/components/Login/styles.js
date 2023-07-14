import { styled } from "styled-components";
import { Link } from "react-router-dom";

const LoginTitle = styled.h1`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 20px;
`;
const Input = styled.input`
  width: 300px;
  height: 40px;
  border: none;
  border-bottom: 1px solid;
  margin-bottom: 10px;
`;

const Button = styled.button`
  border: none;
  width: 100px;
  margin: 0px auto;
  background-color: #90a49f;
  color: white;
  border-radius: 6px;
  cursor: pointer;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 450px;
`;

const FormBox = styled.form`
  height: 150px;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  padding: 10px;
`;

const LoginLink = styled(Link)`
  color: black;
  margin-top: 10px;
`;

export { LoginTitle, Input, Button, FormBox, LoginLink, FormContainer };
