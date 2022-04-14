import React from "react";
import styled from "styled-components/native";

export default function Background({ children }) {
  return <ImgStyled source={require("./Background.jpg")}>{children}</ImgStyled>;
}

const ImgStyled = styled.ImageBackground`
  height: 100%;
  width: 100%;
`;
