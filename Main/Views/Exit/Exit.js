import React from "react";
import styled from "styled-components";
import { Color } from "../../Defaults/Color";
import { Font } from "../../Defaults/Font";
import Background from "../../Reusables/Background/Background";
import FilledButton from "../../Reusables/WideButtons/FilledButton";
import { useDispatch, useSelector } from "react-redux";
import { ActiveView } from "../../Store/ActiveViews";

export default function Exit() {
  const dispatch = useDispatch();
  const View = useSelector((state) => state.ActiveView.active);

  function loginHandler() {
    dispatch(ActiveView.actions.setView("Home"));
  }

  return (
    <Background>
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
      <FilledButton onPress={loginHandler}>Entrar</FilledButton>
    </Background>
  );
}

const LargeLogo = styled.Image`
  width: 150px;
  height: 150px;
`;
const CenterView = styled.View`
  margin-top: 40%;
  align-items: center;
  width: 65%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40%;
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
