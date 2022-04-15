import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import ProductCard from "./ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { OtherProducts } from "../../../Store/OtherProducts";

const numColumns = 2;

export default function ListOtherProducts({ HeaderJSX, query }) {
  const [searchResults, setSearchResults] = useState(false);
  const dispatch = useDispatch();
  const savedOtherProducts = useSelector(
    (state) => state.OtherProducts.products
  );

  useEffect(() => {
    if (savedOtherProducts.length > 0) return;

    async function loadItems() {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=4'"
      );

      const responseJSON = await response.json();

      if (!responseJSON) {
        throw new Error("Missing JSON from API");
      }
      dispatch(OtherProducts.actions.addProducts(responseJSON));
    }
    loadItems();
  }, []);

  useEffect(() => {
    const resultsQuery = savedOtherProducts.filter((product) => {
      if (query && product.title.toLowerCase().includes(query.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
    setSearchResults(resultsQuery ? resultsQuery : "");
  }, [query]);

  let data;
  if (savedOtherProducts && searchResults) {
    data = query ? searchResults : savedOtherProducts;
  }

  return (
    <FlatListStyled
      ListHeaderComponent={!query ? HeaderJSX : <></>}
      data={data}
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
  margin-top: 15px;
  padding-right: 15px;
  width: 100%;
  max-width: 800px;
`;
