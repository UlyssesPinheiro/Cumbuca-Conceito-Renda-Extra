import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Color } from "../../Defaults/Color";
import { Font } from "../../Defaults/Font";
import { Border } from "../../Defaults/Border";
import Background from "../../Reusables/Background/Background";
import FilledButton from "../../Reusables/WideButtons/FilledButton";
import { useDispatch } from "react-redux";
import { ActiveView } from "../../Store/ActiveViews";
import FormHeader from "../NewProduct/Form/FormHeader";
import { UserConfig } from "../../Store/UserConfig";
import KeyboardAvoidingWrapper from "../../Reusables/KeyboardAvoidingWrapper";

export default function Exit() {
  const dispatch = useDispatch();
  const [name, setName] = useState("Usuário");

  function loginHandler() {
    dispatch(ActiveView.actions.setView("Home"));
    dispatch(UserConfig.actions.setUserName(name));
    dispatch(UserConfig.actions.setUserIsLoggedIn(true));
  }

  return (
    <Background>
      <KeyboardAvoidingWrapper>
        <CenterView>
          <LargeLogo
            resizeMode="contain"
            source={require("../../Reusables/Logo/logo.png")}
          ></LargeLogo>
          <HeaderWelcome>Bem vindo ao Cumbuca Renda Extra</HeaderWelcome>
          <SubHeader>
            Venda produtos ou serviços para ganhar uma renda extra
          </SubHeader>
        </CenterView>
        <FormItem>
          <FormHeader>Qual o seu nome?</FormHeader>
          <InputContainer>
            <InputStyled onChangeText={(e) => setName(e)}></InputStyled>
          </InputContainer>
        </FormItem>
        <FilledButton onPress={loginHandler}>Entrar</FilledButton>
      </KeyboardAvoidingWrapper>
    </Background>
  );
}

const LargeLogo = styled.Image`
  width: 150px;
  height: 150px;
`;
const CenterView = styled.View`
  margin-top: 200px;
  align-items: center;
  width: 65%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
`;

const HeaderWelcome = styled.Text`
  font-size: ${Font.sizes[5] + "px"};
  font-family: ${Font.family.bold};
  color: ${Color.black};
  text-align: center;
`;

const SubHeader = styled.Text`
  margin-top: 10px;
  font-size: ${Font.sizes[4] + "px"};
  font-family: ${Font.family.regular};
  color: ${Color.gray7};
  text-align: center;
`;

const FormItem = styled.View`
  margin-top: 10%;
  margin-bottom: 15px;
  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: center;
`;

const InputContainer = styled.View`
  padding-left: 10px;
  display: flex;
  align-items: center;
  flex-direction: row;
  border: ${Border.stroke};
  border-radius: 5px;
  width: 80%;
`;

const InputStyled = styled.TextInput`
  width: 100%;
  padding: 7px 0;
  font-size: ${Font.sizes[4] + "px"};
  font-family: ${Font.family.regular};
`;
