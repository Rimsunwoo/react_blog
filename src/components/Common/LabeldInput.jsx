import React from "react";
import { css, styled } from "styled-components";

function LabeldInput({ size, id, label, value, onChange, placeholder = `${label}을 입력하세요` }) {
  return (
    <>
      <Label htmlFor={id}>{label}: </Label>
      <StInput size={size} id={id} type="text" value={value} onChange={onChange} placeholder={placeholder} required />
    </>
  );
}

const Label = styled.label`
  font-size: 20px;
  font-weight: 700;
  margin-left: 8px;
  margin-right: 4px;
`;

const StInput = styled.input`
  width: 300px;
  height: 30px;
  outline: none;
  border: 2px solid #90a49f;
  border-radius: 8px;
  &:focus {
    border: 2px solid #f8db5c;
  }
  ${(props) => size[props.size]}
`;

const size = {
  small: css`
    width: 200px;
    height: 30px;
  `,
  big: css`
    width: 300px;
    height: 30px;
  `,
};

export default LabeldInput;
