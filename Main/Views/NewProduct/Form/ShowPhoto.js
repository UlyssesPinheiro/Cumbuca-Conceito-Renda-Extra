import React from "react";

import { InputView } from "./StyledPhotoComponents/InputView";
import { DisplayPhoto } from "./StyledPhotoComponents/DisplayPhoto";

export default function ShowPhoto({ displayImage }) {
  console.log("ShowPhoto Log: ", displayImage);
  return (
    <InputView>
      {displayImage && (
        <DisplayPhoto source={{ uri: displayImage }}></DisplayPhoto>
      )}
    </InputView>
  );
}
