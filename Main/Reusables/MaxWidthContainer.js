import React from "react";
import styled from "styled-components/native";

export default function MaxWidthContainer({ children }) {
  return <MaxWidth>{children}</MaxWidth>;
}

const MaxWidth = styled.View`
  width: 100%;
  max-width: 800px;
  align-items: center;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
`;
