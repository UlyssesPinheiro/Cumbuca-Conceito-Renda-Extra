import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./Main/Store/redux";
import Home from "./Main/Views/Home/Home";
import styled from "styled-components";

export default function App() {
  return (
    <Provider store={store}>
      <ViewStyled>
        <Home />
        <StatusBar style="auto" />
      </ViewStyled>
    </Provider>
  );
}

const ViewStyled = styled.View`
  height: 100%;
`;
