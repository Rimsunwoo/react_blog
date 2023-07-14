import React from "react";
import { styled } from "styled-components";
import LogoSrc from "../../assets/oneStepLogo1.jpg";

function Header() {
  return (
    <>
      <HeaderBox>
        <h1>Home</h1>
        <Logo src={LogoSrc}></Logo>
        <h1>Login</h1>
      </HeaderBox>
    </>
  );
}

const Logo = styled.img`
  width: 180px;
  height: 60px;
`;

const HeaderBox = styled.div`
  width: 100%;
  height: 40px;
  background-color: white;
  padding-top: 20px;
  padding-bottom: 8px;
  padding: 20px 5px 8px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid;
`;

export default Header;
