import { useState } from "react";

export function useInputHook(validation) {
  const [enteredInput, setEnteredInput] = useState("");
  const [enteredInputTouched, setEnteredInputTouched] = useState(false);

  const inputEnteredIsValid = validation(enteredInput);
  const inputTouchedIsInvalid = !inputEnteredIsValid && enteredInputTouched;

  function inputChangeHandler(value) {
    setEnteredInput(value);
    setEnteredInputTouched(true);
  }

  function reset() {
    setEnteredInputTouched(false);
    setEnteredInput("");
  }

  function inputBlurHandler() {
    setEnteredInputTouched(true);
  }
  return [
    enteredInput,
    inputEnteredIsValid,
    inputTouchedIsInvalid,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  ];
}
