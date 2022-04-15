import React from "react";
import styled from "styled-components/native";

import CardMyProduct from "./CardMyProduct";
import { useSelector } from "react-redux";
import NewProductButton from "../NewProductButton";
import { useWindowDimensions } from "react-native";

export default function ListMyProducts({ searchResults }) {
  let userProducts = useSelector((state) => state.UserProducts.products);
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

  if (searchResults) userProducts = searchResults;
  if (!userProducts) return;

  return (
    <FlatListStyled
      ListHeaderComponent={NewProductButton}
      data={userProducts}
      renderItem={({ item }) => {
        return (
          <CardMyProduct
            photo={item.photos ? item.photos[0] : ""}
            name={
              item.title.substring(0, 35) +
              `${item.title.length > 35 ? "..." : ""}`
            }
            price={Number(item.price)}
            amount={item.amount}
            id={item.id}
          ></CardMyProduct>
        );
      }}
      numColumns={numColumns}
    />
  );
}
