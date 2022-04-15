import React from "react";
import Background from "../../Reusables/Background/Background";
import styled from "styled-components/native";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Color } from "../../Defaults/Color";
import { IconContainer } from "../../Reusables/Nav/IconContainer";
import { Margins } from "../../Defaults/Margins";
import { useDispatch } from "react-redux";
import { ActiveView } from "../../Store/ActiveViews";
import { Font } from "../../Defaults/Font";
import FilledButton from "../../Reusables/WideButtons/FilledButton";
import LineButton from "../../Reusables/WideButtons/LineButton";
import { useWindowDimensions } from "react-native";
import MaxWidthContainer from "../../Reusables/MaxWidthContainer";

export default function ProductAdded() {
  const dispatch = useDispatch();

  const width = useWindowDimensions().width;

  function closeHandler() {
    dispatch(ActiveView.actions.setView("Home"));
  }

  function goToMyProducts() {
    dispatch(ActiveView.actions.setView("MyProducts"));
  }

  function goToNewProduct() {
    dispatch(ActiveView.actions.setView("NewProduct"));
  }

  const NavUncontained = styled.View`
    margin-top: 60px;
    ${width > 800 ? `width: 80%;` : `width: 100%;`}
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `;
  return (
    <Background>
      <MaxWidthContainer>
        <NavUncontained>
          <IconContainerSty onPress={closeHandler}>
            <Feather name="x" size={35} color={Color.black}></Feather>
          </IconContainerSty>
        </NavUncontained>
        <CenterView>
          <FontAwesome
            name="check-circle"
            size={180}
            color={Color.iconAccent}
          />
          <BoldText>Parabéns, seu anúncio foi criado com sucesso!</BoldText>
          <ThinText>Em breve seu anúncio estará no ar</ThinText>
        </CenterView>
        <ButtonsContainer>
          <FilledButtonStyled onPress={goToMyProducts}>
            Ver meus anúncios
          </FilledButtonStyled>
          <LineButton onPress={goToNewProduct}>Anunciar outro</LineButton>
        </ButtonsContainer>
      </MaxWidthContainer>
    </Background>
  );
}

const IconContainerSty = styled(IconContainer)`
  margin-top: ${Margins.navUncontainedTop + "px"};
  position: absolute;
  left: 20px;
`;

const CenterView = styled.View`
  width: 80%;
  margin: 200px auto 0;
  display: flex;
  align-items: center;
`;

const BoldText = styled.Text`
  margin-top: 30px;
  font-size: ${Font.sizes[5] + "px"};
  font-family: ${Font.family.bold};
  color: ${Color.gray8};
  text-align: center;
`;

const ThinText = styled.Text`
  margin-top: 10px;
  color: ${Color.gray6};
  font-size: ${Font.sizes[4] + "px"};
`;

const ButtonsContainer = styled.View`
  position: absolute;
  bottom: 10%;
  width: 100%;
`;

const FilledButtonStyled = styled(FilledButton)`
  margin-bottom: 15px;
`;
