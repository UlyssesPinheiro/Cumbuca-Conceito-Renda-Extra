import React from "react";
import ContainerStyled from "../../Reusables/ContainerStyled";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Font } from "../../Defaults/Font";
import { Color } from "../../Defaults/Color";

import { ActiveView } from "../../Store/ActiveViews";
import IconSquare from "../../Reusables/IconSquare";

export default function NewProductButton() {
  const dispatch = useDispatch();

  function AddProductHandler() {
    dispatch(ActiveView.actions.setView("NewProduct"));
  }

  return (
    <TouchableOpacity onPress={AddProductHandler}>
      <ContainerStyled>
        <TitleView>
          <IconSquare name="plus"></IconSquare>
          <Title>Anunciar novo</Title>
        </TitleView>
      </ContainerStyled>
    </TouchableOpacity>
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
