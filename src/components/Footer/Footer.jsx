import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <FooterLayout>
      <FootertParagraph>
        © 2023 &nbsp;
        <FooterLink to="/">OneStep &nbsp;</FooterLink>
        powered by &nbsp;
        <FooterLink target="_blank" to="https://github.com/Rimsunwoo/react_blog">
          NbCamp-OneStep
        </FooterLink>
      </FootertParagraph>
    </FooterLayout>
  );
}

export default Footer;

const FooterLayout = styled.footer`
  display: flex;
  justify-content: center;
  height: 100px;
  margin-top: 160px;
  color: #12263a;
  background-color: #ffff;
`;
const FootertParagraph = styled.p`
  margin-top: 3px;
`;

const FooterLink = styled(Link)`
  color: #12263a;
  font-weight: 600;
`;
