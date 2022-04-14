import React from "react";
import styled from "styled-components/native";

import MyProductCard from "./MyProductCard";
import { useSelector } from "react-redux";
import NewProductButton from "../../Views/MyProducts/NewProductButton";

const numColumns = 1;

export default function List1PerLine() {
  const UserProducts = useSelector((state) => state.UserProducts.products);

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

const FlatListStyled = styled.FlatList`
  padding-right: 15px;
`;
