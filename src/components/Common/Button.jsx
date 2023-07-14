import React from "react";
import { css, styled } from "styled-components";

function Button(props) {
  return <StButton {...props}></StButton>;
}

const StButton = styled.button`
  width: 200px;
  height: 100px;
  background-color: white;
  border-radius: 8px;
  cursor: pointer;
  ${(props) => size[props.size]}
`;

const size = {
  small: css`
    width: 50px;
    height: 30px;
  `,
  medium: css`
    width: 80px;
    height: 30px;
  `,
};

export default Button;
