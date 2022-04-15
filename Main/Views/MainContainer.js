import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import Home from "./Home/Home";
import MyProducts from "./MyProducts/MyProducts";
import { useSelector, useDispatch } from "react-redux";
import Exit from "./Exit/Exit";
import NewProduct from "./NewProduct/NewProduct";
import ProductAdded from "./NewProduct/ProductAdded";
import { ActiveView } from "../Store/ActiveViews";

export default function MainContainer() {
  const dispatch = useDispatch();
  const [resetHomeScreen, setResetHomeScreen] = useState(true);

  const ActiveScreen = useSelector((state) => state.ActiveView.active);
  const userIsLoggedIn = useSelector((state) => state.UserConfig.active);

  useEffect(() => {
    if (resetHomeScreen && userIsLoggedIn) {
      dispatch(ActiveView.actions.setView("Home"));
      setResetHomeScreen(false);
    }
  }, []);

  return (
    <ViewStyled>
      {ActiveScreen === "Home" && <Home />}
      {ActiveScreen === "MyProducts" && <MyProducts />}
      {ActiveScreen === "Exit" && <Exit />}
      {ActiveScreen === "NewProduct" && <NewProduct />}
      {ActiveScreen === "ProductAdded" && <ProductAdded />}
      <StatusBar style="auto" />
    </ViewStyled>
  );
}

const ViewStyled = styled.View`
  height: 100%;
`;
