import React from "react";
import { styled } from "styled-components";
function Layout({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  box-sizing: border-box;
  margin-top: 60px;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  position: relative;
  border-right: 1px solid;
  border-left: 1px solid;
`;

export default Layout;
