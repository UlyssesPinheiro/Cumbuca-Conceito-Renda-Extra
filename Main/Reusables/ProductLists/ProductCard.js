import React from "react";
import styled from "styled-components";
import { Border } from "../../Defaults/Border";
import { Color } from "../../Defaults/Color";

export default function ProductCard({ price, name, keyValue }) {
  return (
    <ViewStyled key={keyValue}>
      <ProductImage />
      <TextView>
        <Price>{price}</Price>
        <ProductName>{name}</ProductName>
      </TextView>
    </ViewStyled>
  );
}

// const ProductImage = styled.Image``;

const ProductImage = styled.View`
  height: 180px;
  border-top-right-radius: ${Border.radius};
  border-top-left-radius: ${Border.radius};
  background-color: ${Color.gray5};
`;

const ViewStyled = styled.View`
  background-color: ${Color.primaryContainer};
  flex: 1;
  margin-left: 15px;
  margin-bottom: 15px;
  border-radius: ${Border.radius};
  elevation: 3;
`;
const TextView = styled.View`
  display: flex;
  padding: 15px;
`;
const Price = styled.Text``;

const ProductName = styled.Text``;
