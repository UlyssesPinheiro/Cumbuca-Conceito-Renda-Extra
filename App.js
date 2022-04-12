import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./Main/Store/redux";
import Home from "./Main/Views/Home/Home";
import styled from "styled-components";

import AppLoading from "expo-app-loading";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
