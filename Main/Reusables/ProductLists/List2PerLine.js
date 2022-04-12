import React, { useState } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import Container from "../Container";
import WelcomeUser from "../../Views/Home/WelcomeUser";
import NewProduct from "../../Views/Home/NewProduct";
import MayAlsoLike from "../../Views/Home/MayAlsoLike";
import { MarginContainer } from "../../Defaults/MarginContainer";

const numColumns = 2;

export default function List2PerLine({ HeaderJSX }) {
  const [products, setProducts] = useState([
    { price: "R$ 50,00", name: "Nome do produto", key: 1 },
    { price: "R$ 50,00", name: "Nome do produto", key: 2 },
    { price: "R$ 50,00", name: "Nome do produto", key: 3 },
    { price: "R$ 50,00", name: "Nome do produto", key: 4 },
    { price: "R$ 50,00", name: "Nome do produto", key: 5 },
    { price: "R$ 50,00", name: "Nome do produto", key: 6 },
    { price: "R$ 50,00", name: "Nome do produto", key: 7 },
    { price: "R$ 50,00", name: "Nome do produto", key: 8 },
    { price: "R$ 50,00", name: "Nome do produto", key: 9 },
    { price: "R$ 50,00", name: "Nome do produto", key: 10 },
  ]);

  return (
    <FlatListStyled
      ListHeaderComponent={HeaderJSX}
      data={products}
      renderItem={({ item }) => (
        <ProductCard
          name={item.name}
          price={item.price}
          key={item.key}
        ></ProductCard>
      )}
      numColumns={numColumns}
    />
  );
}

const FlatListStyled = styled.FlatList`
  padding-right: 15px;
`;
