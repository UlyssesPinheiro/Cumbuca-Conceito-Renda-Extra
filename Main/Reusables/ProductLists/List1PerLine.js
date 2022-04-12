import React from "react";
import styled from "styled-components";

import MyProductCard from "./MyProductCard";
import { useSelector } from "react-redux";

const numColumns = 1;

export default function List1PerLine() {
  const UserProducts = useSelector((state) => state.UserProducts);

  if (!UserProducts) return;

  return (
    <FlatListStyled
      data={UserProducts}
      renderItem={({ item }) => (
        <MyProductCard
          image={item.image}
          name={
            item.title.substring(0, 35) +
            `${item.title.length > 35 ? "..." : ""}`
          }
          price={`R$ ${Number(item.price).toFixed(2)}`}
          key={item.key}
        ></MyProductCard>
      )}
      numColumns={numColumns}
    />
  );
}

const FlatListStyled = styled.FlatList`
  padding-right: 15px;
  padding-top: 30px;
`;
