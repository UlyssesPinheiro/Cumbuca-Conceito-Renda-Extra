import React from "react";
import styled from "styled-components/native";
import { Color } from "../../../Defaults/Color";
import { Font } from "../../../Defaults/Font";
import * as ImagePicker from "expo-image-picker";
import { InputView } from "./StyledPhotoComponents/InputView";

export default function NewPhoto({ addNewPhoto }) {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled && addNewPhoto) {
      addNewPhoto(result.uri);
    }
  };

  return (
    <InputView>
      <AddPhotoBtn onPress={pickImage}>
        <BtnIcon>+</BtnIcon>
      </AddPhotoBtn>
    </InputView>
  );
}

const AddPhotoBtn = styled.TouchableOpacity`
  background-color: ${Color.black};
  width: 40px;
  height: 40px;
  border-radius: 200px;
  display: flex;
  justify-content: center;
`;

const BtnIcon = styled.Text`
  color: ${Color.white};
  font-family: ${Font.family.medium};
  font-size: ${Font.sizes[7] + "px"};
  text-align: center;
  position: relative;
  bottom: 4px;
`;
