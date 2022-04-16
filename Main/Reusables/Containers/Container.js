import React from "react";
import { Platform, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Border } from "../../Defaults/Border";
import { Color } from "../../Defaults/Color";
import { BoxShadow } from "../../Defaults/BoxShadow";

export default function Container({ children, style }) {
  return (
    <ContainerStyled
      style={[Platform.OS === "android" ? styles.container : null, style]}
    >
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
    shadowColor: Color.black,
    shadowRadius: 5,
    elevation: 3,
  },
});
