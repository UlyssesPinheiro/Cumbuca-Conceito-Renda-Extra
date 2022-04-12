import React from "react";
import styled from "styled-components";
import { Border } from "../../../Defaults/Border";
import { Font } from "../../../Defaults/Font";

export default function FormInput({ placeholder }) {
  return <Input placeholder={placeholder}></Input>;
}

const Input = styled.TextInput`
  padding: 7px 15px;
  border: ${Border.stroke};
  border-radius: 5px;
  font-size: ${Font.sizes[4] + "px"};
`;
