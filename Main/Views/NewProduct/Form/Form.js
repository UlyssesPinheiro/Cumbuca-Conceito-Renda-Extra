import React, { useState } from "react";
import styled from "styled-components";
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import ShowPhoto from "./ShowPhoto";
import NewPhoto from "./NewPhoto";

export default function Form() {
  const [photos, setPhotos] = useState([]);

  function addPhotoInput(uri) {
    console.log("WORKING");
    setPhotos((prev) => {
      console.log("setPhotosLog: ", prev);
      return [...prev, uri];
    });
  }

  return (
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
        <FormInput placeholder={"Preencher nome"}></FormInput>
      </FormItem>
      <FormItem>
        <FormHeader>Descrição</FormHeader>
        <FormInput placeholder={"Descrição Opcional"}></FormInput>
      </FormItem>
      <FormItem>
        <FormHeader>Valor</FormHeader>
        <FormInput placeholder={"Preencher Valor"}></FormInput>
      </FormItem>
      <FormItem>
        <FormHeader>Quantidade</FormHeader>
        <FormInput placeholder={"Preencher Quantidade"}></FormInput>
      </FormItem>
    </ViewStyled>
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
