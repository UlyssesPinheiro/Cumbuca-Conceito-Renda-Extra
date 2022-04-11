import React from "react";
import styled from "styled-components";
import Container from "../../Reusables/Container";
import TitleNav from "../../Reusables/TitleNav";
import Logo from "../../Reusables/Logo/Logo";

export default function Nav() {
  return (
    <Container>
      <TopView>
        <TitleNav>Renda Extra</TitleNav>
      </TopView>
      <Logo />
    </Container>
  );
}

const TopView = styled.View`
  display: flex;
  flex-direction: row;
`;
