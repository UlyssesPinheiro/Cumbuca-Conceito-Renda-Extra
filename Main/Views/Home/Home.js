import React from "react";
import styled from "styled-components";
import Background from "../../Reusables/Background/Background";
import Nav from "../../Reusables/Nav";
import TitleNav from "../../Reusables/TitleNav";
import Logo from "../../Reusables/Logo/Logo";
import Icon from "react-native-vector-icons/Feather";
import { Color } from "../../Defaults/Color";
import SearchBar from "../../Reusables/SearchBar";

export default function Home() {
  return (
    <ViewStyled>
      <Background>
        <Nav>
          <TopView>
            <Icon name="menu" size={35} color={Color.black} />
            <TitleNav>Renda Extra</TitleNav>
            <Logo />
          </TopView>
          <SearchBar />
        </Nav>
      </Background>
    </ViewStyled>
  );
}

const TopView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ViewStyled = styled.View``;
const TextStyled = styled.Text``;
