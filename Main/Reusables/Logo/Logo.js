import React from "react";
import { Image } from "react-native";
import styled from "styled-components";

export default function Logo() {
  return (
    <LogoStyled
      resizeMode="contain"
      source={require("./logo.png")}
    ></LogoStyled>
  );
}

const LogoStyled = styled.Image`
  height: 35px;
  width: 35px;
`;
