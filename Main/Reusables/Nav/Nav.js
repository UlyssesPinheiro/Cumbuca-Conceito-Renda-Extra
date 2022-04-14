import React from "react";
import styled from "styled-components/native";
import Container from "../Container";

export default function Nav({ children }) {
  return <ContainerStyled>{children}</ContainerStyled>;
}

const ContainerStyled = styled(Container)`
  padding: 40px 20px 20px;
`;
