import React from "react";
import styled from "styled-components";
import MarginContainer from "../../Defaults/MarginContainer";
import Background from "../../Reusables/Background/Background";
import Nav from "../../Reusables/Nav";
import TitleNav from "../../Reusables/TitleNav";
import Logo from "../../Reusables/Logo/Logo";
import Icon from "react-native-vector-icons/Feather";
import { Color } from "../../Defaults/Color";
import SearchBar from "../../Reusables/SearchBar";
import List2PerLine from "../../Reusables/ProductLists/List2PerLine";
import Container from "../../Reusables/Container";

import WelcomeUser from "./WelcomeUser";
import NewProduct from "./NewProduct";
import MayAlsoLike from "./MayAlsoLike";

export default function Home() {
  const HomeItems = (
    <>
      <ContainerStyled>
        <WelcomeUser />
      </ContainerStyled>
      <ContainerStyled>
        <NewProduct />
      </ContainerStyled>
      <MayAlsoLike />
    </>
  );

  return (
    <Background>
      <Nav>
        <TopView>
          <Icon name="menu" size={35} color={Color.black} />
          <TitleNav>Renda Extra</TitleNav>
          <Logo />
        </TopView>
        <SearchBar />
      </Nav>
      <List2PerLine HeaderJSX={HomeItems} />
    </Background>
  );
}

const TopView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ContainerStyled = styled(Container)`
  margin: 40px 15px 0;
  margin-right: 0;
  padding: 20px 15px;
`;
