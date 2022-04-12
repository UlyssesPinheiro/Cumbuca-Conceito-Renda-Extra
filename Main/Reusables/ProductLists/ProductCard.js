import React from "react";
import styled from "styled-components";
import { Border } from "../../Defaults/Border";
import { Color } from "../../Defaults/Color";
import { StyleSheet } from "react-native";
import { Font } from "../../Defaults/Font";

export default function ProductCard({ price, name, keyValue, image }) {
  return (
    <ViewStyled style={styles.container} key={keyValue}>
      <ImageContainer>
        <ProductImage resizeMode="contain" source={{ uri: image }} />
      </ImageContainer>
      <TextView>
        <Price>{price}</Price>
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

const ViewStyled = styled.View`
  background-color: ${Color.primaryContainer};
  flex: 1;
  margin-left: 15px;
  margin-bottom: 15px;
  border-radius: ${Border.radius};
`;
const TextView = styled.View`
  display: flex;
  padding: 15px;
`;
const Price = styled.Text`
  font-size: ${Font.sizes[3] + "px"};
  font-family: ${Font.family.bold};
`;

const ProductName = styled.Text`
  font-size: ${Font.sizes[2] + "px"};
  font-family: ${Font.family.regular};
  color: ${Color.gray7};
`;

const styles = StyleSheet.create({
  container: {
    elevation: 3,
  },
});
