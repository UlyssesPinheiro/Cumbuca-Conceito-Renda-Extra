import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import Feather from "react-native-vector-icons/Feather";
import { Border } from "../../../Defaults/Border";
import { Color } from "../../../Defaults/Color";
import { Font } from "../../../Defaults/Font";
import { UserProducts } from "../../../Store/UserProducts";
import Container from "../../../Reusables/Containers/Container";
import {
  ProductBoldText,
  ProductName,
} from "../../../Reusables/ProductLists/BoldTextAndName";
import { useWindowDimensions } from "react-native";

export default function CardMyProduct({
  showModal,
  photo,
  name,
  price,
  amount,
  totalValue,
  id,
}) {
  const dispatch = useDispatch();
  const width = useWindowDimensions().width;

  function editProductAmount(payload) {
    dispatch(UserProducts.actions.editProductAmount(payload));
  }

  function deleteProduct() {
    showModal("onDelete", id);
  }

  function editProductAmountHandler({ plusOrMinus, id }) {
    if (amount === 1 && plusOrMinus === -1) {
      showModal("onZeroUnids", id);
      return;
    }
    editProductAmount({ plusOrMinus: plusOrMinus, id });
  }

  const CardView = styled(Container)`
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
    overflow: hidden;
    ${width > 800
      ? `width: 49%;
`
      : ""}
  `;

  return (
    <CardView key={id}>
      <DeleteButton onPress={deleteProduct}>
        <Feather name="x" size={25} color={Color.black}></Feather>
      </DeleteButton>
      {photo && <ProductImage source={{ uri: photo }} />}
      {!photo && <ImageMissing />}
      <TextView>
        <ProductBoldText>{`$ ${price}`}</ProductBoldText>
        <ProductName>{name}</ProductName>
        <BoldTitleMargTop>In stock:</BoldTitleMargTop>
        <AmountView>
          <AmountText>{amount}</AmountText>
          <AddSubtractBtn
            onPress={() => editProductAmountHandler({ plusOrMinus: -1, id })}
          >
            <BtnTxt>-</BtnTxt>
          </AddSubtractBtn>
          <AddSubtractBtn
            onPress={() => editProductAmountHandler({ plusOrMinus: 1, id })}
          >
            <BtnTxt>+</BtnTxt>
          </AddSubtractBtn>
        </AmountView>
        <BoldTitleMargTop>Total value: {`$ ${totalValue}`}</BoldTitleMargTop>
      </TextView>
    </CardView>
  );
}

const ProductImage = styled.Image`
  height: 100%;
  width: 45%;
`;
const ImageMissing = styled.View`
  height: 100%;
  width: 45%;
  background-color: ${Color.gray5};
`;

const TextView = styled.View`
  display: flex;
  padding: 15px;
`;

const BoldTitleMargTop = styled(ProductBoldText)`
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

const AddSubtractBtn = styled.TouchableOpacity`
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

const DeleteButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
`;
