import React from "react";
import styled from "styled-components/native";
import { Border } from "../../../Defaults/Border";
import { Color } from "../../../Defaults/Color";
import Container from "../../../Reusables/Containers/Container";
import {
  ProductBoldText,
  ProductName,
} from "../../../Reusables/ProductLists/BoldTextAndName";

export default function ProductCard({ price, name, keyValue, image }) {
  return (
    <ViewStyled key={keyValue}>
      <ImageContainer>
        <ProductImage resizeMode="contain" source={{ uri: image }} />
      </ImageContainer>
      <TextView>
        <ProductBoldText>{price}</ProductBoldText>
        <ProductName>{name}</ProductName>
      </TextView>
    </ViewStyled>
  );
}

// const ProductImage = styled.Image``;

const ProductImage = styled.Image`
  height: 100%;
  width: 100%;
  background-color: #ffffff;
`;

const ImageContainer = styled.View`
  height: 180px;
  border-top-right-radius: ${Border.radius};
  border-top-left-radius: ${Border.radius};
  background-color: ${Color.gray5};
  overflow: hidden;
`;

const ViewStyled = styled(Container)`
  flex: 1;
  margin-left: 15px;
  margin-bottom: 15px;
`;
const TextView = styled.View`
  display: flex;
  padding: 15px;
`;
