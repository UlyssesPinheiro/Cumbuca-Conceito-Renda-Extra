import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const numColumns = 2;

export default function List2PerLine({ HeaderJSX }) {
  useEffect(() => {
    function loadItems() {
      fetch("https://fakestoreapi.com/products?limit=4'")
        .then((res) => res.json())
        .then((json) => {
          if (!json) throw new Error("Missing JSON from API");
          return setProducts(json);
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
          price={`R$ ${Number(item.price).toFixed(0)}`}
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
