import styled from "styled-components";
import { Border } from "../../../../Defaults/Border";
import { Font } from "../../../../Defaults/Font";

export const InputView = styled.View`
  height: 100px;
  width: 100px;
  border: ${Border.stroke};
  border-radius: 5px;
  font-size: ${Font.sizes[4] + "px"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  overflow: hidden;
`;
