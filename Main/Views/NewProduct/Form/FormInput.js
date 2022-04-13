import React from "react";
import styled from "styled-components";
import { Border } from "../../../Defaults/Border";
import { Color } from "../../../Defaults/Color";
import { Font } from "../../../Defaults/Font";

export default function FormInput({
  symbol,
  placeholder,
  errorMessage,
  inputEntered,
  inputTouchedIsInvalid,
  inputChangeHandler,
  inputBlurHandler,
}) {
  const InputContainer = styled.View`
    display: flex;
    align-items: center;
    flex-direction: row;
    border: ${inputTouchedIsInvalid ? Border.strokeError : Border.stroke};
    border-radius: 5px;
    padding: 7px 15px;
  `;

  return (
    <InputContainer>
      {symbol && <Symbol>{symbol}</Symbol>}
      <Input
        onChangeText={inputChangeHandler}
        onBlur={inputBlurHandler}
        placeholder={placeholder}
        value={inputEntered}
      ></Input>
      {inputTouchedIsInvalid && (
        <ErrorText>{errorMessage ? errorMessage : ""}</ErrorText>
      )}
    </InputContainer>
  );
}

const Input = styled.TextInput`
  width: 100%;
  font-size: ${Font.sizes[4] + "px"};
  font-family: ${Font.family.regular};
`;

const Symbol = styled.Text`
  font-family: ${Font.family.regular};
  font-size: ${Font.sizes[4] + "px"};
`;

const ErrorText = styled.Text`
  color: ${Color.error};
  position: absolute;
  bottom: -18px;
`;
