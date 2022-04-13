import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Color } from "../../Defaults/Color";

import Background from "../../Reusables/Background/Background";
import FilledButton from "../../Reusables/WideButtons/FilledButton";
import { ActiveView } from "../../Store/ActiveViews";
import TextInputStyled from "./TextInputStyled.js";

export default function TestingView() {
  const dispatch = useDispatch();

  function goHome() {
    dispatch(ActiveView.actions.setView("Home"));
  }

  const [data, setData] = useState({
    username: "",
    password: "",
    checkTextImputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  function SubmitForm() {}

  function handleValidUser(val) {
    console.log("valid user:", val);
    if (val.trim().length > 4) {
      setData((data) => {
        return { ...data, isValidUser: true };
      });
    } else {
      setData((data) => {
        return { ...data, isValidUser: false };
      });
    }
  }
  function handleValidPassword(val) {
    console.log("valid user:", val);
    if (val.trim().length > 8) {
      setData((data) => {
        return { ...data, isValidPassword: true };
      });
    } else {
      setData((data) => {
        return { ...data, isValidPassword: false };
      });
    }
  }

  return (
    <Background>
      <Container>
        <FilledButton onPress={goHome}></FilledButton>

        <TextInputStyled
          onChangeText={(e) => handleValidUser(e)}
        ></TextInputStyled>
        {!data.isValidUser && (
          <ErrorText>Username must be 4 charraters long.</ErrorText>
        )}

        <TextInputStyled
          onChangeText={(e) => handleValidPassword(e)}
        ></TextInputStyled>
        {!data.isValidPassword && (
          <ErrorText>Password must be 8 charraters long.</ErrorText>
        )}

        <FilledButton onPress={SubmitForm}></FilledButton>
      </Container>
    </Background>
  );
}

const Container = styled.View`
  padding: 20px;
  padding-top: 40px;
`;

const ErrorText = styled.Text`
  color: ${Color.error};
`;
