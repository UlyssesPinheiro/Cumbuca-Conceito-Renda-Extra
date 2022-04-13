import React from "react";
import styled from "styled-components";
import { Border } from "../../Defaults/Border";
import { Color } from "../../Defaults/Color";
import { Font } from "../../Defaults/Font";
import Container from "../Container";
import { ProductBoldText, ProductName } from "./BoldTextAndName";

export default function MyProductCard({ photo, name, price, amount }) {
  return (
    <CardView>
      {photo && <ProductImage source={{ uri: photo }} />}
      {!photo && <ImageMissing />}
      <TextView>
        <ProductBoldText>{price}</ProductBoldText>
        <ProductName>{name}</ProductName>
        <AmountTitle>Quantidade</AmountTitle>
        <AmountView>
          <AmountText>{amount} un.</AmountText>
          <AddSubtractBtn>
            <BtnTxt>-</BtnTxt>
          </AddSubtractBtn>
          <AddSubtractBtn>
            <BtnTxt>+</BtnTxt>
          </AddSubtractBtn>
        </AmountView>
      </TextView>
    </CardView>
  );
}

const CardView = styled(Container)`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  margin-left: 15px;
  overflow: hidden;
`;
const ProductImage = styled.Image`
  height: 100%;
  width: 40%;
`;
const ImageMissing = styled.View`
  height: 100%;
  width: 40%;
  background-color: ${Color.gray5};
`;

const TextView = styled.View`
  display: flex;
  padding: 15px;
`;

const AmountTitle = styled(ProductBoldText)`
  margin-top: 15px;
`;

const AmountView = styled.View`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
`;

const AmountText = styled(ProductName)`
  font-size: ${Font.sizes[4] + "px"};
`;

const AddSubtractBtn = styled.View`
  margin-left: 10px;
  height: 30px;
  width: 30px;
  background-color: ${Color.secondaryContainer};
  border-radius: ${Border.radius};
  display: flex;
  align-items: center;
`;

const BtnTxt = styled.Text`
  font-size: ${Font.sizes[6] + "px"};
  font-family: ${Font.family.bold};
  position: relative;
  bottom: 5px;
`;
