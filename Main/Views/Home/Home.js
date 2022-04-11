import React from "react";
import styled from "styled-components";
import Background from "../../Reusables/Background/Background";
import Nav from "./Nav";

export default function Home() {
  return (
    <ViewStyled>
      <Background>
        <Nav></Nav>
      </Background>
    </ViewStyled>
  );
}

const ViewStyled = styled.View``;
const TextStyled = styled.Text``;
const ImageStyled = styled.Image`
  width: 50px;
  height: 50px;
`;
