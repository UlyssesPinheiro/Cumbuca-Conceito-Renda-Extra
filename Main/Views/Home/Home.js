import React, { useState } from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";

import Background from "../../Reusables/Background/Background";
import Nav from "../../Reusables/Nav/Nav";
import TitleNav from "../../Reusables/Nav/TitleNav";
import Logo from "../../Reusables/Logo/Logo";
import { Color } from "../../Defaults/Color";
import SearchBar from "../../Reusables/SearchBar";
import ListOtherProducts from "./ListOtherProducts/ListOtherProducts";
import Container from "../../Reusables/Containers/Container";
import WelcomeUser from "./WelcomeUser";
import NewProduct from "./NewProduct";
import MayAlsoLike from "./MayAlsoLike";
import MenuList from "./MenuList/MenuList";
import { TopView } from "../../Reusables/Nav/TopView";
import { IconContainer } from "../../Reusables/Nav/IconContainer";
import { useDispatch } from "react-redux";
import { ActiveView } from "../../Store/ActiveViews";
import { Margins } from "../../Defaults/Margins";
import { UserProducts } from "../../Store/UserProducts";
import MaxWidthContainer from "../../Reusables/MaxWidthContainer";

export default function Home() {
  const [MenuExpanded, setMenuExpanded] = useState(false);
  const [query, setQuery] = useState(false);
  const dispatch = useDispatch();

  function MenuExpandedHandler() {
    setMenuExpanded((e) => !e);
  }

  function addNewProductHandler() {
    // dispatch(UserProducts.actions.clearProducts());
    dispatch(ActiveView.actions.setView("NewProduct"));
  }

  function searchQuery(text) {
    setQuery(text);
  }

  const HomeItems = (
    <>
      <ContainerStyled>
        <WelcomeUser />
      </ContainerStyled>
      <TouchableOpacity onPress={addNewProductHandler}>
        <ContainerStyled>
          <NewProduct />
        </ContainerStyled>
      </TouchableOpacity>
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
      <MaxWidthContainer>
        <Nav>
          <TopView>
            <IconContainer onPress={MenuExpandedHandler}>
              {IconShown}
            </IconContainer>
            <TitleNav>Renda Extra</TitleNav>
            <Logo />
          </TopView>
          {!MenuExpanded ? (
            <SearchBar
              placeholder="Busque produtos"
              parentLiftText={searchQuery}
            />
          ) : (
            <MenuList />
          )}
        </Nav>
        <ListOtherProducts HeaderJSX={HomeItems} query={query} />
      </MaxWidthContainer>
    </Background>
  );
}

const ContainerStyled = styled(Container)`
  margin: ${Margins.MarginContainer};
  margin-right: 0;
  padding: 20px 15px;
`;
