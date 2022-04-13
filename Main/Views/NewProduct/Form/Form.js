import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import ShowPhoto from "./ShowPhoto";
import NewPhoto from "./NewPhoto";
import FilledButton from "../../../Reusables/WideButtons/FilledButton";
import { useInputHook } from "../../../hooks/useInputHook";

export default function Form() {
  let formIsValid = false;

  const [
    nameEnteredInput,
    nameEnteredIsValid,
    nameTouchedIsInvalid,
    nameChangeHandler,
    nameBlurHandler,
    nameReset,
  ] = useInputHook((e) => e.trim() !== "");
  const [
    descriptionEnteredInput,
    descriptionEnteredIsValid,
    descriptionTouchedIsInvalid,
    descriptionChangeHandler,
    descriptionBlurHandler,
    descriptionReset,
  ] = useInputHook((e) => true);
  const [
    priceEnteredInput,
    priceEnteredIsValid,
    priceTouchedIsInvalid,
    priceChangeHandler,
    priceBlurHandler,
    priceReset,
  ] = useInputHook((e) => Number(e) > 0);
  const [
    amountEnteredInput,
    amountEnteredIsValid,
    amountTouchedIsInvalid,
    amountChangeHandler,
    amountBlurHandler,
    amountReset,
  ] = useInputHook((e) => Number(e) > 0);

  const [photos, setPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  function addPhotoInput(uri) {
    console.log("WORKING");
    setPhotos((prev) => {
      console.log("setPhotosLog: ", prev);
      return [...prev, uri];
    });
  }

  function formValidation() {
    if (nameEnteredIsValid && priceEnteredIsValid && amountEnteredIsValid) {
      formIsValid = true;
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
    return formIsValid;
  }
  useEffect(() => {
    formValidation();
  }, [photos, nameEnteredIsValid, priceEnteredIsValid, amountEnteredIsValid]);

  function formReset() {
    nameReset();
    priceReset();
    amountReset();
    descriptionReset();
  }

  function onSubmitHandler() {
    if (!formValidation()) return;

    // formReset();
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
          <FormHeader>Nome do Produto</FormHeader>
          <FormInput
            inputEntered={nameEnteredInput}
            inputTouchedIsInvalid={nameTouchedIsInvalid}
            inputChangeHandler={nameChangeHandler}
            inputBlurHandler={nameBlurHandler}
            placeholder={"Preencher nome"}
            errorMessage={"Por favor preencha o nome"}
          ></FormInput>
        </FormItem>
        <FormItem>
          <FormHeader>Descrição</FormHeader>
          <FormInput
            inputEntered={descriptionEnteredInput}
            inputChangeHandler={descriptionChangeHandler}
            placeholder={"Descrição Opcional"}
          ></FormInput>
        </FormItem>
        <FormItem>
          <FormHeader>Preço</FormHeader>
          <FormInput
            inputEntered={priceEnteredInput}
            inputTouchedIsInvalid={priceTouchedIsInvalid}
            inputChangeHandler={priceChangeHandler}
            inputBlurHandler={priceBlurHandler}
            symbol={"R$ "}
            keyboardType="number-pad"
            placeholder={"50 (valor inteiro)"}
            errorMessage={"Valor inteiro, sem os centavos"}
          ></FormInput>
        </FormItem>
        <FormItem>
          <FormHeader>Quantidade</FormHeader>
          <FormInput
            inputEntered={amountEnteredInput}
            inputTouchedIsInvalid={amountTouchedIsInvalid}
            inputChangeHandler={amountChangeHandler}
            inputBlurHandler={amountBlurHandler}
            keyboardType="number-pad"
            placeholder={"0"}
            errorMessage={"A quantidade deve ser maior do que 0"}
          ></FormInput>
        </FormItem>
      </ViewStyled>
      <FilledButton disabled={buttonDisabled} onPress={onSubmitHandler}>
        Anunciar
      </FilledButton>
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
