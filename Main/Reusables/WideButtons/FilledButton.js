import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Border } from "../../Defaults/Border";
import { Color } from "../../Defaults/Color";
import { Font } from "../../Defaults/Font";

export default function FilledButton({ onPress, children, disabled }) {
  const SignInView = styled.View`
    margin-left: auto;
    margin-right: auto;
    background-color: ${!disabled ? Color.black : Color.gray5};
    height: 50px;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${Border.radius};
  `;

  return (
    <>
      {!disabled && (
        <TouchableOpacity onPress={onPress}>
          <SignInView>
            <ButtonText>{children}</ButtonText>
          </SignInView>
        </TouchableOpacity>
      )}

      {disabled && (
        <SignInView>
          <ButtonText>{children}</ButtonText>
        </SignInView>
      )}
    </>
  );
}

const ButtonText = styled.Text`
  color: ${Color.white};
  font-size: ${Font.sizes[5] + "px"};
  font-family: ${Font.family.bold};
`;
