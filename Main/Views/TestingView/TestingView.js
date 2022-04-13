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

  const [Field1, setField1] = useState("");
  const [Field2, setField2] = useState("");
  const [Field3, setField3] = useState("");
  const [Field4, setField4] = useState("");

  function SubmitForm() {
    console.log("log: ", Field1, Field2, Field3, Field4);
  }

  return (
    <Background>
      <Container>
        <FilledButton onPress={goHome}></FilledButton>

        <TextInputStyled onChangeText={(v) => setField1(v)}></TextInputStyled>
        <TextInputStyled onChangeText={(v) => setField2(v)}></TextInputStyled>
        <TextInputStyled onChangeText={(v) => setField3(v)}></TextInputStyled>
        <TextInputStyled onChangeText={(v) => setField4(v)}></TextInputStyled>
        <FilledButton onPress={SubmitForm}></FilledButton>
      </Container>
    </Background>
  );
}

const Container = styled.View`
  padding: 20px;
  padding-top: 40px;
`;
