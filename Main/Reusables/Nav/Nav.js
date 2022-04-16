import React from "react";
import styled from "styled-components/native";
import Container from "../Containers/Container";

export default function Nav({ children }) {
  return <ContainerStyled>{children}</ContainerStyled>;
}

const ContainerStyled = styled(Container)`
  width: 100%;
  /* max-width: 800px; */
  padding: 40px 20px 20px;
`;
