import React from "react";
import styled from "styled-components";
import { Border } from "../../Defaults/Border";
import { Color } from "../../Defaults/Color";
import { Font } from "../../Defaults/Font";

export default function FilledButton({ onPress, children }) {
  return (
    <SignInButton onPress={onPress}>
      <ButtonText>{children}</ButtonText>
    </SignInButton>
  );
}

const SignInButton = styled.TouchableOpacity`
  margin-left: auto;
  margin-right: auto;
  background-color: ${Color.black};
  height: 50px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${Border.radius};
`;
const ButtonText = styled.Text`
  color: ${Color.white};
  font-size: ${Font.sizes[5] + "px"};
  font-family: ${Font.family.bold};
`;
