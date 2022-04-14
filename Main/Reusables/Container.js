import React from "react";
import styled from "styled-components/native";
import { Border } from "../Defaults/Border";
import { Color } from "../Defaults/Color";
import { StyleSheet } from "react-native";
import { BoxShadow } from "../Defaults/BoxShadow";

export default function Container({ children, style }) {
  return (
    <ContainerStyled style={[style, styles.container]}>
      {children}
    </ContainerStyled>
  );
}

const ContainerStyled = styled.View`
  background-color: ${Color.primaryContainer};
  border-radius: ${Border.radius};
  border-radius: ${Border.radius};
  box-shadow: ${BoxShadow};
`;

const styles = StyleSheet.create({
  container: {
    elevation: 3,
  },
});
