import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

import CardMyProduct from "./CardMyProduct";
import { useSelector } from "react-redux";
import NewProductButton from "../NewProductButton";
import { useWindowDimensions } from "react-native";

export default function ListMyProducts({ order, query, showModal }) {
  const width = useWindowDimensions().width;
  const userProducts = useSelector((state) => state.UserProducts.products);
  const [searchResults, setSearchResults] = useState(false);

  if (!userProducts) return;

  function orderProducts() {
    const orderedProducts = [...userProducts].sort((a, b) => {
      switch (order) {
        case "date":
          return a;
        case "price":
          return a.price < b.price;
        case "title":
          return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
        case "amount":
          return a.amount < b.amount;
        case "totalValue":
          return a.totalValue < b.totalValue;
        default:
          return a;
      }
    });
    setSearchResults(
      orderedProducts.filter((product) => {
        if (product.title.toLowerCase().includes(query.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      })
    );
  }

  useEffect(() => {
    orderProducts();
  }, [userProducts, query, order]);

  let numColumns = 1;
  if (width > 800) {
    numColumns = 2;
  }

  return (
    <FlatListStyled
      columnWrapperStyle={
        numColumns > 1 ? { justifyContent: "space-between" } : ""
      }
      ListHeaderComponent={!query ? NewProductButton : null}
      data={searchResults ? searchResults : userProducts}
      renderItem={({ item }) => {
        return (
          <CardMyProduct
            showModal={showModal}
            photo={item.photos ? item.photos[0] : ""}
            name={
              item.title.substring(0, 35) +
              `${item.title.length > 35 ? "..." : ""}`
            }
            price={Number(item.price)}
            amount={item.amount}
            totalValue={item.totalValue}
            id={item.id}
          ></CardMyProduct>
        );
      }}
      numColumns={numColumns}
    />
  );
}

const FlatListStyled = styled.FlatList`
  padding: 15px;
  width: 100%;
  max-width: 800px;
`;
