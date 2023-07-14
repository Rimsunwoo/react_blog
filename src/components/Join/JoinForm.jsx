import React from "react";
import { LoginTitle, Input, Button, FormBox, LoginLink, FormContainer } from "../Login/styles";
function JoinForm() {
  return (
    <FormContainer>
      <FormBox>
        <LoginTitle>회원가입</LoginTitle>
        <Input />
        <Input type="password" />
        <Button>회원가입</Button>
      </FormBox>
      <LoginLink to="/login">로그인</LoginLink>
    </FormContainer>
  );
}

export default JoinForm;
