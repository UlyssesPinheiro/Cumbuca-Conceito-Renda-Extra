import React, { useState } from "react";
import styled from "styled-components";
import { Color } from "../../Defaults/Color";
import { Font } from "../../Defaults/Font";
import Icon from "react-native-vector-icons/Feather";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { UserConfig } from "../../Store/UserConfig";

export default function WelcomeUser() {
  const dispatch = useDispatch();

  const hidennBalance = useSelector((state) => state.UserConfig.hiddenBalance);
  console.log(hidennBalance);

  function toggleHideBalanceHandler() {
    dispatch(UserConfig.actions.toggleHiddenBalance());
  }

  return (
    <>
      <TitleView>
        <UserProfile>
          <UserName>US</UserName>
        </UserProfile>
        <WelcomeTitle>Olá, Usuário</WelcomeTitle>
      </TitleView>
      <SalesView>
        <SalesTitleView>
          <SalesTitle>Saldo das vendas</SalesTitle>
          <IconContainer onPress={toggleHideBalanceHandler}>
            <Icon
              name={hidennBalance ? "eye-off" : "eye"}
              size={Font.sizes[6]}
              color={Color.black}
            />
          </IconContainer>
        </SalesTitleView>
        <SalesBalance>{hidennBalance ? "••••" : "R$ 150,00"}</SalesBalance>
      </SalesView>
    </>
  );
}

const UserProfile = styled.View`
  height: 60px;
  width: 60px;
  border-radius: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Color.userProfile};
`;

const UserName = styled.Text`
  font-size: ${Font.sizes[5] + "px"};
  font-family: ${Font.family.regular};
  color: ${Color.white};
`;

const TitleView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const WelcomeTitle = styled.Text`
  margin-left: 15px;
  font-size: ${Font.sizes[7] + "px"};
  font-family: ${Font.family.bold};
  color: ${Color.gray7};
`;

const SalesView = styled.View`
  margin-top: 15px;
  padding: 0 20px;
`;

const SalesTitleView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SalesTitle = styled.Text`
  font-size: ${Font.sizes[5] + "px"};
  color: ${Color.gray7};
`;

const IconContainer = styled.TouchableOpacity`
  background-color: ${Color.secondaryContainer};
  border-radius: 200px;
  padding: 7px;
`;

const SalesBalance = styled.Text`
  font-size: ${Font.sizes[6] + "px"};
  font-family: ${Font.family.bold};
  color: ${Color.gray8};
`;
