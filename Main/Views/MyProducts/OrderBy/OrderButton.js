import React, { useState } from "react";
import styled from "styled-components/native";
import { Font } from "../../../Defaults/Font";
import { Color } from "../../../Defaults/Color";
import { Border } from "../../../Defaults/Border";

export default function OrderButton({ children, selected, onPress }) {
  const WrapperButton = styled.TouchableOpacity`
    padding: 5px;
    margin-right: 5px;
    align-items: center;
    flex: auto;
    border-radius: ${Border.radius};
    background-color: ${selected
      ? Color.secondaryContainerPressed
      : Color.secondaryContainer};
  `;

  const TextItem = styled.Text`
    font-family: ${Font.family.regular};
    color: ${selected ? Color.black : Color.gray7};
  `;

  return (
    <WrapperButton onPress={onPress}>
      <TextItem>{children}</TextItem>
    </WrapperButton>
  );
}
