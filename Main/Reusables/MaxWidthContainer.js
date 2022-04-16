import React, { forwardRef } from "react";
import styled from "styled-components/native";

const MaxWidthContainer = forwardRef(({ children }, ref) => {
  return <MaxWidth>{children}</MaxWidth>;
});

// export default function MaxWidthContainer({ children }) {
//   return <MaxWidth>{children}</MaxWidth>;
// }
export default MaxWidthContainer;

const MaxWidth = styled.View`
  width: 100%;
  max-width: 800px;
  align-items: center;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
`;

// forwardRef((props, ref)
