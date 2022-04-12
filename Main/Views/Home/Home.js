import React, { useState } from "react";
import styled from "styled-components";
import Icon from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import Background from "../../Reusables/Background/Background";
import Nav from "../../Reusables/Nav";
import TitleNav from "../../Reusables/TitleNav";
import Logo from "../../Reusables/Logo/Logo";
import { Color } from "../../Defaults/Color";
import SearchBar from "../../Reusables/SearchBar";
import List2PerLine from "../../Reusables/ProductLists/List2PerLine";
import Container from "../../Reusables/Container";
import WelcomeUser from "./WelcomeUser";
import NewProduct from "./NewProduct";
import MayAlsoLike from "./MayAlsoLike";
import MenuList from "./MenuList/MenuList";

export default function Home() {
  const [MenuExpanded, setMenuExpanded] = useState(false);

  function MenuExpandedHandler() {
    setMenuExpanded((e) => !e);
  }

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

  const IconShown = MenuExpanded ? (
    <FontAwesome name="angle-up" size={35} color={Color.black}></FontAwesome>
  ) : (
    <Icon name="menu" size={35} color={Color.black} />
  );

  return (
    <Background>
      <Nav>
        <TopView>
          <IconContainer onPress={MenuExpandedHandler}>
            {IconShown}
          </IconContainer>
          <TitleNav>Renda Extra</TitleNav>
          <Logo />
        </TopView>
        {!MenuExpanded ? <SearchBar /> : <MenuList />}
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

const IconContainer = styled.TouchableOpacity`
  height: 35px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
