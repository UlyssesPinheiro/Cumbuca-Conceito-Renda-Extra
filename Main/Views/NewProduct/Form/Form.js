import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FormHeader from "./FormHeader";
import ShowPhoto from "./ShowPhoto";
import NewPhoto from "./NewPhoto";
import FilledButton from "../../../Reusables/WideButtons/FilledButton";
import { Color } from "../../../Defaults/Color";
import { Border } from "../../../Defaults/Border";
import { Font } from "../../../Defaults/Font";
import { useDispatch } from "react-redux";
import { UserProducts } from "../../../Store/UserProducts";

export default function Form() {
  const dispatch = useDispatch();

  const [photos, setPhotos] = useState([]);

  function addPhotoInput(uri) {
    console.log("WORKING");
    setPhotos((prev) => {
      console.log("setPhotosLog: ", prev);
      return [...prev, uri];
    });
  }

  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    amount: "",
    checkTextImputChange: false,
    isValidName: true,
    isValidPrice: true,
    isValidAmount: true,
  });

  function handleValidName(val) {
    console.log("valid Name:", val);
    if (val.trim().length > 4) {
      setData((data) => {
        return { ...data, name: val, isValidName: true };
      });
    } else {
      setData((data) => {
        return { ...data, isValidName: false };
      });
    }
  }

  function handleValidDescription(val) {
    console.log("valid Description:", val);
    if (val.length > 0) {
      setData((data) => {
        return { ...data, description: val };
      });
    }
  }

  function handleValidPrice(val) {
    console.log("valid Price:", val);
    if (Number(val) > 0) {
      setData((data) => {
        return { ...data, price: val, isValidPrice: true };
      });
    } else {
      setData((data) => {
        return { ...data, isValidPrice: false };
      });
    }
  }

  function handleValidAmount(val) {
    console.log("valid Amount:", val);
    if (Number(val) > 0) {
      setData((data) => {
        return { ...data, amount: val, isValidAmount: true };
      });
    } else {
      setData((data) => {
        return { ...data, isValidAmount: false };
      });
    }
  }

  function onSubmitHandler() {
    if (data.isValidName && data.isValidPrice && data.isValidAmount) {
      const exportData = {
        photos,
        title: data.name,
        description: data.description ? data.description : "",
        price: data.price,
        amount: data.amount,
      };

      console.log("All required fields are filled");
      console.log("data to save on state: ", exportData);

      dispatch(UserProducts.actions.addProduct(exportData));
    }
  }

  return (
    <>
      <ViewStyled>
        <FormItem>
          <FormHeader>Fotos</FormHeader>

          <Photos horizontal={true}>
            {photos.map((item) => (
              <ShowPhoto displayImage={item}></ShowPhoto>
            ))}
            <NewPhoto addNewPhoto={addPhotoInput}></NewPhoto>
          </Photos>
        </FormItem>

        <FormItem>
          <FormHeader>Nome do produto</FormHeader>
          <InputContainer>
            <InputStyled
              onChangeText={(e) => handleValidName(e)}
              placeholder={"Preencher nome"}
            ></InputStyled>
          </InputContainer>
          {!data.isValidName && (
            <ErrorText>Nome deve ter pelo menos 5 letras.</ErrorText>
          )}
        </FormItem>

        <FormItem>
          <FormHeader>Descrição</FormHeader>
          <InputContainer>
            <InputStyled
              onChangeText={(e) => handleValidDescription(e)}
              placeholder={"Descrição Opcional"}
            ></InputStyled>
          </InputContainer>
        </FormItem>

        <FormItem>
          <FormHeader>Preço</FormHeader>
          <InputContainer>
            <CurrencySymbol>R$</CurrencySymbol>
            <InputStyled
              onChangeText={(e) => handleValidPrice(e)}
              placeholder={"50"}
            ></InputStyled>
          </InputContainer>
          {!data.isValidPrice && (
            <ErrorText>Valor inteiro sem os centavos.</ErrorText>
          )}
        </FormItem>

        <FormItem>
          <FormHeader>Quantidade</FormHeader>
          <InputContainer>
            <InputStyled
              onChangeText={(e) => handleValidAmount(e)}
              placeholder={"0"}
            ></InputStyled>
          </InputContainer>
          {!data.isValidAmount && (
            <ErrorText>A quantidade deve ser maior do que 0.</ErrorText>
          )}
        </FormItem>
      </ViewStyled>
      <FilledButton onPress={onSubmitHandler}>Anunciar</FilledButton>
    </>
  );
}

const ViewStyled = styled.View`
  width: 80%;
  margin: 40px auto 30px;
`;

const FormItem = styled.View`
  margin-bottom: 15px;
`;

const Photos = styled.ScrollView`
  display: flex;
  flex-direction: row;
`;

const InputContainer = styled.View`
  padding-left: 10px;
  display: flex;
  align-items: center;
  flex-direction: row;
  border: ${Border.stroke};
  border-radius: 5px;
`;

const InputStyled = styled.TextInput`
  width: 100%;
  padding: 7px 0;
  font-size: ${Font.sizes[4] + "px"};
  font-family: ${Font.family.regular};
`;

const ErrorText = styled.Text`
  color: ${Color.error};
`;

const CurrencySymbol = styled.Text`
  margin-right: 5px;
  font-family: ${Font.family.regular};
  font-size: ${Font.sizes[4] + "px"};
`;
