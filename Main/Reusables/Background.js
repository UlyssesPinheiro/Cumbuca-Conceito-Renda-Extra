import React from "react";
import styled from "styled-components";

export default function Background() {
  return (
    <ImgStyled source={require("../Reusables/Background.jpg")}></ImgStyled>
  );
}

const ImgStyled = styled.ImageBackground`
  height: 100%;
  width: 100%;
`;
