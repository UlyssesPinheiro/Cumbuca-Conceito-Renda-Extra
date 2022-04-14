import React from "react";
import styled from "styled-components/native";
import { Border } from "../Defaults/Border";
import { Color } from "../Defaults/Color";
import Icon from "react-native-vector-icons/Feather";
import { Font } from "../Defaults/Font";

export default function IconSquare({ name }) {
  return (
    <ViewStyled>
      <Icon name={name} size={Font.sizes[6]} color={Color.black} />
    </ViewStyled>
  );
}

const ViewStyled = styled.View`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${Border.radius};
  background-color: ${Color.secondaryContainer};
`;
