import React from "react";
import styled from "styled-components";
import { Font } from "../../../Defaults/Font";
import IconSquare from "../../../Reusables/IconSquare";

export default function MenuList() {
  return (
    <ListView>
      <ListItemView>
        <IconSquare name="user" />
        <ListText>Meus Produtos</ListText>
      </ListItemView>
      <ListItemView>
        <IconSquare name="log-out" />
        <ListText>Sair</ListText>
      </ListItemView>
    </ListView>
  );
}

const ListView = styled.View``;

const ListItemView = styled.View`
  margin: 15px 15px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ListText = styled.Text`
  margin-left: 15px;
  font-size: ${Font.sizes[4] + "px"};
  font-family: ${Font.family.bold};
`;
