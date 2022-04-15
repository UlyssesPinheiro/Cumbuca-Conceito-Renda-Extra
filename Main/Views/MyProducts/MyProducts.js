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
import { useDispatch, useSelector } from "react-redux";
import { ActiveView } from "../../Store/ActiveViews";
import ListMyProducts from "./ListMyProducts/ListMyProducts";

export default function MyProducts() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.UserProducts.products);
  const [searchResults, setSearchResults] = useState(false);

  function backToHomeHandler() {
    dispatch(ActiveView.actions.setView("Home"));
  }

  function searchProducts(productList, query) {
    setSearchResults(
      productList.filter((product) => {
        if (product.title.includes(query)) {
          return true;
        } else {
          return false;
        }
      })
    );
  }

  function getSearchQuery(query) {
    searchProducts(productList, query);
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
        <SearchBar parentLiftText={getSearchQuery} />
      </Nav>

      <ListMyProducts searchResults={searchResults ? searchResults : false} />
    </Background>
  );
}
