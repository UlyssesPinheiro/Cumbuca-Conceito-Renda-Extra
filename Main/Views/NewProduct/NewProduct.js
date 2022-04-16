import React from "react";
import styled from "styled-components/native";
import Background from "../../Reusables/Background/Background";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Color } from "../../Defaults/Color";
import TitleNav from "../../Reusables/Nav/TitleNav";
import Form from "./Form/Form";
import { IconContainer } from "../../Reusables/Nav/IconContainer";
import { useDispatch } from "react-redux";
import { ActiveView } from "../../Store/ActiveViews";
import { useWindowDimensions } from "react-native";
import KeyboardAvoidingWrapper from "../../Reusables/KeyboardAvoidingWrapper";

export default function NewProduct() {
  const dispatch = useDispatch();

  function goBackHandler() {
    dispatch(ActiveView.actions.setView("Home"));
  }

  const width = useWindowDimensions().width;

  const NavUncontained = styled.View`
    margin-top: 60px;
    ${width > 800 ? `width: 80%;` : `width: 100%;`}
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `;

  return (
    <Background>
      <KeyboardAvoidingWrapper>
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
      </KeyboardAvoidingWrapper>
    </Background>
  );
}

const IconContainerSty = styled(IconContainer)`
  position: absolute;
  left: 20px;
`;
