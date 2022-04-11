import React from "react";
import styled from "styled-components";
import Container from "./Container";
import { Color } from "../Defaults/Color";
import { Border } from "../Defaults/Border";

export default function Nav({ children }) {
  return <ContainerStyled>{children}</ContainerStyled>;
}

const ContainerStyled = styled(Container)`
  padding: 30px 20px 20px;
  border-radius: ${Border.radius};
  box-shadow: 5px 10px ${Color.black};
  elevation: 5;
`;
