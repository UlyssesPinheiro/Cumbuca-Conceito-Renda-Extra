import styled from "styled-components";

import { Font } from "../../Defaults/Font";
import { Color } from "../../Defaults/Color";

export const ProductBoldText = styled.Text`
  font-size: ${Font.sizes[3] + "px"};
  font-family: ${Font.family.bold};
`;

export const ProductName = styled.Text`
  font-size: ${Font.sizes[2] + "px"};
  font-family: ${Font.family.regular};
  color: ${Color.gray7};
`;
