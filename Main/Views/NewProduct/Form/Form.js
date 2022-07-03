import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import FormHeader from "./FormHeader";
import ShowPhoto from "./ShowPhoto";
import NewPhoto from "./NewPhoto";
import FilledButton from "../../../Reusables/WideButtons/FilledButton";
import { Color } from "../../../Defaults/Color";
import { Border } from "../../../Defaults/Border";
import { Font } from "../../../Defaults/Font";
import { useDispatch } from "react-redux";
import { UserProducts } from "../../../Store/UserProducts";
import { ActiveView } from "../../../Store/ActiveViews";

export default function Form() {
  const dispatch = useDispatch();

  const [photos, setPhotos] = useState([]);

  function addPhotoInput(uri) {
    setPhotos((prev) => {
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
    if (val.length > 0) {
      setData((data) => {
        return { ...data, description: val };
      });
    }
  }

  function handleValidPrice(val) {
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
    if (
      data.name &&
      data.price &&
      data.amount &&
      data.isValidName &&
      data.isValidPrice &&
      data.isValidAmount
    ) {
      const exportData = {
        photos,
        title: data.name,
        description: data.description ? data.description : "",
        price: Number(data.price),
        amount: Number(data.amount),
        totalValue: Number(data.price) * Number(data.amount),
      };

      dispatch(UserProducts.actions.addProduct(exportData));
      dispatch(ActiveView.actions.setView("ProductAdded"));
    } else {
      handleValidName(data.name);
      handleValidPrice(data.price);
      handleValidAmount(data.amount);
    }
  }

  return (
    <>
      <ViewStyled>
        <FormItem>
          <FormHeader>Photos</FormHeader>

          <Photos horizontal={true}>
            {photos.map((item) => (
              <ShowPhoto displayImage={item}></ShowPhoto>
            ))}
            <NewPhoto addNewPhoto={addPhotoInput}></NewPhoto>
          </Photos>
        </FormItem>

        <FormItem>
          <FormHeader>Product Title</FormHeader>
          <InputContainer>
            <InputStyled
              onChangeText={(e) => handleValidName(e)}
              placeholder={"Fill title"}
            ></InputStyled>
          </InputContainer>
          {!data.isValidName && (
            <ErrorText>Title must have at least 5 letters.</ErrorText>
          )}
        </FormItem>

        <FormItem>
          <FormHeader>Description</FormHeader>
          <InputContainer>
            <InputStyled
              onChangeText={(e) => handleValidDescription(e)}
              placeholder={"Description is optional"}
            ></InputStyled>
          </InputContainer>
        </FormItem>

        <FormItem>
          <FormHeader>Price</FormHeader>
          <InputContainer>
            <CurrencySymbol>$</CurrencySymbol>
            <InputStyled
              onChangeText={(e) => handleValidPrice(e)}
              placeholder={"0"}
            ></InputStyled>
          </InputContainer>
          {!data.isValidPrice && <ErrorText>Number with no cents.</ErrorText>}
        </FormItem>

        <FormItem>
          <FormHeader>Stock Amount</FormHeader>
          <InputContainer>
            <InputStyled
              onChangeText={(e) => handleValidAmount(e)}
              placeholder={"0"}
            ></InputStyled>
          </InputContainer>
          {!data.isValidAmount && (
            <ErrorText>The amount must be greater than 0.</ErrorText>
          )}
        </FormItem>
      </ViewStyled>
      <FilledButton onPress={onSubmitHandler}>Publish</FilledButton>
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
