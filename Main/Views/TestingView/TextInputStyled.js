import React from "react";
import styled from "styled-components";
import { Color } from "../../Defaults/Color";

export default function TextInputStyled({ onChangeText }) {
  return <InputStyled onChangeText={onChangeText}></InputStyled>;
}

const InputStyled = styled.TextInput`
  margin-top: 20px;
  border-radius: 10px;
  background-color: ${Color.gray6};
`;
