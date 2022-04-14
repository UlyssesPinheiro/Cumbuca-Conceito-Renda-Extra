import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import { Font } from "../../../Defaults/Font";
import IconSquare from "../../../Reusables/IconSquare";
import { ActiveView } from "../../../Store/ActiveViews";
import { UserConfig } from "../../../Store/UserConfig";

export default function MenuList() {
  const dispatch = useDispatch();
  const View = useSelector((state) => state.ActiveView.active);

  function goToMyProducts() {
    dispatch(ActiveView.actions.setView("MyProducts"));
  }
  function exit() {
    dispatch(ActiveView.actions.setView("Exit"));
    dispatch(UserConfig.actions.clearUserName());
    dispatch(UserConfig.actions.setUserIsLoggedIn(false));
  }

  return (
    <ListView>
      <ListItem onPress={goToMyProducts}>
        <IconSquare name="user" />
        <ListText>Meus Produtos</ListText>
      </ListItem>
      <ListItem onPress={exit}>
        <IconSquare name="log-out" />
        <ListText>Sair</ListText>
      </ListItem>
    </ListView>
  );
}

const ListView = styled.View``;

const ListItem = styled.TouchableOpacity`
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
