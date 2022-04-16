import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import MaxWidthContainer from "./MaxWidthContainer";

export default function KeyboardAvoidingWrapper({ children }) {
  return (
    <KeyboardAvoidingView style={{ width: "100%", flex: 1 }}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <MaxWidthContainer>{children}</MaxWidthContainer>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
