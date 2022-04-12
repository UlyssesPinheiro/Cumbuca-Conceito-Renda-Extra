import React from "react";
import styled from "styled-components";
import Container from "./Container";

export default function ContainerStyled({ children }) {
  return <ContainerSty>{children}</ContainerSty>;
}

const ContainerSty = styled(Container)`
  margin: 40px 15px 40px;
  margin-right: 0;
  padding: 20px 15px;
`;
