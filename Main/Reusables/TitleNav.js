import React from "react";
import styled from "styled-components";
import { Font } from "../Defaults/Font";

export default function TitleNav({ children }) {
  return (
    <TitleView>
      <TitleStyled>{children}</TitleStyled>
    </TitleView>
  );
}

const TitleStyled = styled.Text`
  font-size: ${Font.sizes[7] + "px"};
  font-family: ${Font.family.bold};
`;

const TitleView = styled.View`
  flex-direction: row;
  align-self: flex-start;
`;
