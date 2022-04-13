import React from "react";
import styled from "styled-components";
import { Font } from "../../Defaults/Font";
import { Margins } from "../../Defaults/Margins";

export default function MayAlsoLike() {
  return (
    <ViewStyled>
      <Title>Podem te interessar</Title>
    </ViewStyled>
  );
}

const ViewStyled = styled.View`
  margin: ${Margins.MarginContainer};
  margin-bottom: 10px;
  display: flex;
`;
const Title = styled.Text`
  font-size: ${Font.sizes[5] + "px"};
  font-family: ${Font.family.medium};
`;
