import React from "react";
import { styled } from "styled-components";
import LogoSrc from "../../assets/oneStepLogo1.jpg";

function Header() {
  return (
    <>
      <HeaderBox>
        <Logo src={LogoSrc}></Logo>
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
  padding-bottom: 8px;

  top: 0;
`;

export default Header;
