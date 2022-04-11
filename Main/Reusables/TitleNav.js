import React from "react";
import styled from "styled-components";
import { Font } from "../Defaults/Font";

export default function TitleNav({ children }) {
  return <TitleStyled>{children}</TitleStyled>;
}

const TitleStyled = styled.Text`
  font-size: ${Font.sizes[7]};
  font-family: ${Font.family.bold};
`;
