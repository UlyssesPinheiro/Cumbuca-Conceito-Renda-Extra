import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const numColumns = 2;
const dummyProducts = [
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
];

export default function List2PerLine({ HeaderJSX }) {
  useEffect(() => {
    function loadItems() {
      fetch("https://fakestoreapi.com/products?limit=20'")
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          return setProducts(json || dummyProducts);
        });
    }
    loadItems();
  }, []);

  const [products, setProducts] = useState([]);

  return (
    <FlatListStyled
      ListHeaderComponent={HeaderJSX}
      data={products}
      renderItem={({ item }) => (
        <ProductCard
          image={item.image}
          name={
            item.title.substring(0, 35) +
            `${item.title.length > 35 ? "..." : ""}`
          }
          price={`R$ ${Number(item.price).toFixed(2)}`}
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
