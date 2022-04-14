import React from "react";
import styled from "styled-components/native";
import { Color } from "../../../Defaults/Color";
import { Font } from "../../../Defaults/Font";

export default function FormHeader({ children }) {
  return <Header>{children}</Header>;
}

const Header = styled.Text`
  font-size: ${Font.sizes[4] + "px"};
  font-family: ${Font.family.bold};
  color: ${Color.gray8};
  margin-bottom: 7px;
`;
