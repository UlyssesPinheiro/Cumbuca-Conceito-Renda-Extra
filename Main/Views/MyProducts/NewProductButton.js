import React from "react";
import ContainerStyled from "../../Reusables/ContainerStyled";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import { Font } from "../../Defaults/Font";
import { Color } from "../../Defaults/Color";

import { ActiveView } from "../../Store/ActiveViews";
import IconSquare from "../../Reusables/IconSquare";
import { useWindowDimensions } from "react-native";

export default function NewProductButton() {
  const dispatch = useDispatch();
  const width = useWindowDimensions().width;

  function AddProductHandler() {
    dispatch(ActiveView.actions.setView("NewProduct"));
  }

  const NewProductView = styled.TouchableOpacity`
    ${width > 800 ? `width: 98%;` : `width: 100%;`}
  `;

  return (
    <NewProductView onPress={AddProductHandler}>
      <ContainerStyled>
        <TitleView>
          <IconSquare name="plus"></IconSquare>
          <Title>Anunciar novo</Title>
        </TitleView>
      </ContainerStyled>
    </NewProductView>
  );
}

const TitleView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.Text`
  margin-left: 15px;
  font-size: ${Font.sizes[5] + "px"};
  font-family: ${Font.family.bold};
  color: ${Color.gray7};
`;
