import React, { useState } from "react";
import styled from "styled-components/native";
import { Border } from "../Defaults/Border";
import { Color } from "../Defaults/Color";
import Icon from "react-native-vector-icons/Feather";
import { Font } from "../Defaults/Font";

export default function SearchBar({ parentLiftText }) {
  const [text, setText] = useState("");

  function liftTextStateUp(query) {
    setText(query);
    parentLiftText(query);
  }

  return (
    <SearchView>
      <Icon name="search" size={Font.sizes[5]} color={Color.gray6}></Icon>
      <Input
        onChangeText={(query) => liftTextStateUp(query)}
        value={text}
        placeholder="Busque produtos"
      ></Input>
    </SearchView>
  );
}

const SearchView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  background-color: ${Color.secondaryContainer};
  border-radius: ${Border.radius};
  padding: 5px 15px;
`;

const Input = styled.TextInput`
  padding-left: 10px;
  font-size: ${Font.sizes[5] + "px"};
`;
