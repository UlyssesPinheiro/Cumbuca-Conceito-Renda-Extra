import React from "react";
import styled from "styled-components";
import { Border } from "../Defaults/Border";
import { Color } from "../Defaults/Color";

export default function Container({ children, style }) {
  return <ContainerStyled style={style}>{children}</ContainerStyled>;
}

const ContainerStyled = styled.View`
  background-color: ${Color.primaryContainer};
  border-radius: ${Border.radius};
`;
