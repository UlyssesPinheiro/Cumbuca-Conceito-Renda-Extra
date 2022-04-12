import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StatusBar } from "expo-status-bar";
import Home from "./Home/Home";
import MyProducts from "./MyProducts/MyProducts";
import { useSelector } from "react-redux";
import Exit from "./Exit/Exit";
import NewProduct from "./NewProduct/NewProduct";

export default function MainContainer() {
  const ActiveView = useSelector((state) => state.ActiveView.active);

  return (
    <ViewStyled>
      {ActiveView === "Home" && <Home />}
      {ActiveView === "MyProducts" && <MyProducts />}
      {ActiveView === "Exit" && <Exit />}
      {ActiveView === "NewProduct" && <NewProduct />}
      <StatusBar style="auto" />
    </ViewStyled>
  );
}

const ViewStyled = styled.View`
  height: 100%;
  background-color: #222222;
`;
