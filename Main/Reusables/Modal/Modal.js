import React, { useState } from "react";
import styled from "styled-components";
import { Color } from "../../Defaults/Color";
import PopUpMessage from "../../Views/MyProducts/PopUpMessage";

export default function Modal({ visible, parentFunctions, message }) {
  return (
    <ModalStyled transparent={true} visible={visible}>
      <PopUpMessage
        message={message}
        parentFunctions={parentFunctions}
      ></PopUpMessage>
      <ViewBackground></ViewBackground>
    </ModalStyled>
  );
}

const ModalStyled = styled.Modal``;

const ViewBackground = styled.View`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
  background-color: ${Color.black};
  opacity: 0.5;
`;
