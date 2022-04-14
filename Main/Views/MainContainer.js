import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StatusBar } from "expo-status-bar";
import Home from "./Home/Home";
import MyProducts from "./MyProducts/MyProducts";
import { useSelector, useDispatch } from "react-redux";
import Exit from "./Exit/Exit";
import NewProduct from "./NewProduct/NewProduct";
import ProductAdded from "./NewProduct/ProductAdded";
// import { UserConfig } from "../Store/UserConfig";
// import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MainContainer() {
  const dispatch = useDispatch();

  const ActiveView = useSelector((state) => state.ActiveView.active);
  // const UserConfigConst = useSelector((state) => state.UserConfig);

  // const [loadedFromAsync, setLoadedFromAsync] = useState(false);

  // async function loadFromAsync() {
  //   const UserConfigAsync = await AsyncStorage.getItem("UserConfigAsync");
  //   console.log("loadingFromAsync: ", UserConfigAsync);

  //   if (UserConfigAsync) {
  //     dispatch(
  //       UserConfig.actions.setHiddenBalance(
  //         UserConfigAsync.hiddenBalance ? UserConfigAsync.hiddenBalance : false
  //       )
  //     );
  //     dispatch(UserConfig.actions.setUserIsLoggedIn(false));
  //     dispatch(
  //       UserConfig.actions.setUserName(
  //         UserConfigAsync.userName ? UserConfigAsync.userName : "Usuário"
  //       )
  //     );
  //     setLoadedFromAsync(true);
  //     console.log("LoadingFromAsync CurrentState: ", UserConfigConst);
  //   }
  // }

  // async function saveToAsync() {
  //   await AsyncStorage.setItem(
  //     "UserConfigAsync",
  //     JSON.stringify(UserConfigConst)
  //   );
  //   const UserConfigAsync = await AsyncStorage.getItem("UserConfigAsync");
  //   console.log("saveToAsync");
  //   console.log(UserConfigAsync);
  // }

  // useEffect(() => {
  //   loadFromAsync();
  // }, []);

  // useEffect(() => {
  //   if (loadedFromAsync) {
  //     setTimeout(() => {
  //       saveToAsync();
  //     }, 5000);
  //   }
  // }, [ActiveView]);

  return (
    <ViewStyled>
      {ActiveView === "Home" && <Home />}
      {ActiveView === "MyProducts" && <MyProducts />}
      {ActiveView === "Exit" && <Exit />}
      {ActiveView === "NewProduct" && <NewProduct />}
      {ActiveView === "ProductAdded" && <ProductAdded />}
      <StatusBar style="auto" />
    </ViewStyled>
  );
}

const ViewStyled = styled.View`
  height: 100%;
  background-color: #222222;
`;
