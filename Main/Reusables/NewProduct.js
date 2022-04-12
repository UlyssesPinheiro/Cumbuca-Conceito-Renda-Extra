import React from "react";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Color } from "../Defaults/Color";
import { Font } from "../Defaults/Font";
import IconSquare from "./IconSquare";
import { ActiveView } from "../Store/ActiveViews";

export default function NewProduct({ showDesc }) {
  const dispatch = useDispatch();

  function AddProductHandler() {
    dispatch(ActiveView.actions.setView("NewProduct"));
  }

  return (
    <TouchableOpacity onPress={AddProductHandler}>
      <TitleView>
        <IconSquare name="plus"></IconSquare>
        <Title>Anunciar novo</Title>
      </TitleView>
      {showDesc && (
        <Description>
          Anuncie um produto ou serviço agora e ganhe um dinheiro extra
        </Description>
      )}
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

const Description = styled.Text`
  margin-top: 15px;
  font-size: ${Font.sizes[3] + "px"};
  font-family: ${Font.family.regular};
  color: ${Color.gray7};
`;
