import React from "react";
import styled from "styled-components";
import { Border } from "../Defaults/Border";
import { Color } from "../Defaults/Color";
import { StyleSheet } from "react-native";

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
  box-shadow: 5px 10px ${Color.black};
`;

const styles = StyleSheet.create({
  container: {
    elevation: 3,
  },
});
