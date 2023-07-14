import React from "react";
import { styled } from "styled-components";

import { Input, Button, LoginTitle, FormBox, FormContainer, LoginLink } from "./styles";

function LoginForm() {
  return (
    <FormContainer>
      <FormBox>
        <LoginTitle>로그인</LoginTitle>
        <Input />
        <Input type="password" />
        <Button>LogIn</Button>
      </FormBox>
      <LoginLink to="/join">회원가입</LoginLink>
    </FormContainer>
  );
}

export default LoginForm;
