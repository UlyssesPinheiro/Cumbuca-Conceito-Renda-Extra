import React, { useState } from "react";
import Background from "../../Reusables/Background/Background";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { Color } from "../../Defaults/Color";
import Nav from "../../Reusables/Nav/Nav";
import { TopView } from "../../Reusables/Nav/TopView";
import { IconContainer } from "../../Reusables/Nav/IconContainer";
import TitleNav from "../../Reusables/Nav/TitleNav";
import Logo from "../../Reusables/Logo/Logo";
import SearchBar from "../../Reusables/SearchBar";
import { useDispatch } from "react-redux";
import { ActiveView } from "../../Store/ActiveViews";
import List1PerLine from "../../Reusables/ProductLists/List1PerLine";

export default function MyProducts() {
  const dispatch = useDispatch();
  function backToHomeHandler() {
    dispatch(ActiveView.actions.setView("Home"));
  }

  return (
    <Background>
      <Nav>
        <TopView>
          <IconContainer onPress={backToHomeHandler}>
            <FontAwesome
              name="angle-left"
              size={35}
              color={Color.black}
            ></FontAwesome>
          </IconContainer>
          <TitleNav>Meus Produtos</TitleNav>
          <Logo />
        </TopView>
        <SearchBar />
      </Nav>
      <List1PerLine />
    </Background>
  );
}
