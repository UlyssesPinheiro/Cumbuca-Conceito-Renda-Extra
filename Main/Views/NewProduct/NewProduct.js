import React from "react";
import styled from "styled-components";
import Background from "../../Reusables/Background/Background";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Color } from "../../Defaults/Color";
import TitleNav from "../../Reusables/Nav/TitleNav";
import Form from "./Form/Form";
import { IconContainer } from "../../Reusables/Nav/IconContainer";
import { useDispatch } from "react-redux";
import { ActiveView } from "../../Store/ActiveViews";
import FilledButton from "../../Reusables/WideButtons/FilledButton";

export default function NewProduct() {
  const dispatch = useDispatch();

  function goBackHandler() {
    dispatch(ActiveView.actions.setView("Home"));
  }

  return (
    <Background>
      <NavUncontained>
        <IconContainerSty onPress={goBackHandler}>
          <FontAwesome
            name="angle-left"
            size={35}
            color={Color.black}
          ></FontAwesome>
        </IconContainerSty>
        <TitleNav>Anunciar Produto</TitleNav>
      </NavUncontained>
      <Form />
      <FilledButton>Anunciar</FilledButton>
    </Background>
  );
}

const NavUncontained = styled.View`
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const IconContainerSty = styled(IconContainer)`
  position: absolute;
  left: 20px;
`;
