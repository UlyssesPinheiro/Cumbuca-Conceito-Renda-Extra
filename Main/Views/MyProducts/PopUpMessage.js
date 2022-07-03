import React from "react";
import styled from "styled-components/native";
import Feather from "react-native-vector-icons/Feather";

import { Border } from "../../Defaults/Border";
import { Color } from "../../Defaults/Color";
import { Font } from "../../Defaults/Font";
import Container from "../../Reusables/Containers/Container";
import { IconContainer } from "../../Reusables/Nav/IconContainer";

export default function PopUpMessage({ message, parentFunctions }) {
  function cancelHandler() {
    parentFunctions.closeModal();
  }
  function deleteHandler() {
    parentFunctions.confimDelete();
  }

  return (
    <MessageWrapper>
      <PaddingView>
        <ContainerCustom>
          <IconContainerCustom onPress={cancelHandler}>
            <Feather name="x" size={25} color={Color.black}></Feather>
          </IconContainerCustom>
          <MessageTitle>Delete listing?</MessageTitle>
          <MessageBody>{message}</MessageBody>
          <Buttons>
            <ButtonTouchableOpacity onPress={cancelHandler}>
              <Feather name="x" size={25} color={Color.black}></Feather>
              <ButtonText>Cancel</ButtonText>
            </ButtonTouchableOpacity>
            <ButtonTouchableOpacity onPress={deleteHandler}>
              <Feather name="check" size={25} color={Color.black}></Feather>
              <ButtonText>Delete</ButtonText>
            </ButtonTouchableOpacity>
          </Buttons>
        </ContainerCustom>
      </PaddingView>
    </MessageWrapper>
  );
}

const MessageWrapper = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

const PaddingView = styled.View`
  width: 100%;
  height: 100%;
  max-width: 800px;
  padding: 15px;
  align-items: center;
  justify-content: center;
`;

const ContainerCustom = styled(Container)`
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 15px;
  padding: 15px;
`;

const MessageTitle = styled.Text`
  font-family: ${Font.family.bold};
  font-size: ${Font.sizes[5] + "px"};
  color: ${Color.gray7};
`;
const MessageBody = styled.Text`
  font-family: ${Font.family.regular};
  font-size: ${Font.sizes[4] + "px"};
  color: ${Color.gray7};
  text-align: center;
  margin-top: 10px;
`;

const Buttons = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-top: 15px;
`;

const ButtonTouchableOpacity = styled.TouchableOpacity`
  padding: 5px;
  width: 48%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: ${Border.radius};
  background-color: ${Color.secondaryContainer};
`;

const ButtonText = styled.Text`
  margin-left: 7px;
  font-family: ${Font.family.bold};
  font-size: ${Font.sizes[4] + "px"};
  color: ${Color.gray7};
`;

const IconContainerCustom = styled(IconContainer)`
  position: absolute;
  right: 7px;
  top: 7px;
`;
