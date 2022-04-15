import React from "react";
import styled from "styled-components/native";

import MyProductCard from "./MyProductCard";
import { useSelector } from "react-redux";
import NewProductButton from "../../Views/MyProducts/NewProductButton";
import { useWindowDimensions } from "react-native";

export default function List1PerLine() {
  const UserProducts = useSelector((state) => state.UserProducts.products);
  const width = useWindowDimensions().width;

  const FlatListStyled = styled.FlatList`
    ${width < 800 ? "padding-right: 12px" : ""};
    width: 100%;
    max-width: 800px;
  `;

  let numColumns = 1;
  if (width > 800) {
    numColumns = 2;
  }

  if (!UserProducts) return;

  return (
    <FlatListStyled
      ListHeaderComponent={NewProductButton}
      data={UserProducts}
      renderItem={({ item }) => {
        return (
          <MyProductCard
            photo={item.photos ? item.photos[0] : ""}
            name={
              item.title.substring(0, 35) +
              `${item.title.length > 35 ? "..." : ""}`
            }
            price={Number(item.price)}
            amount={item.amount}
            id={item.id}
          ></MyProductCard>
        );
      }}
      numColumns={numColumns}
    />
  );
}
