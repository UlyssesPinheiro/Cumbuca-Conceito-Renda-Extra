import React from "react";
import styled from "styled-components";
import { Color } from "../../Defaults/Color";
import { Font } from "../../Defaults/Font";
import IconSquare from "../../Reusables/IconSquare";

export default function NewProduct() {
  return (
    <>
      <TitleView>
        <IconSquare name="plus"></IconSquare>
        <Title>Anunciar novo</Title>
      </TitleView>
      <Description>
        Anuncie um produto ou serviço agora e ganhe um dinheiro extra
      </Description>
    </>
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
