import { createSlice } from "@reduxjs/toolkit";

export const UserConfig = createSlice({
  name: "User Config",
  initialState: {
    hiddenBalance: false,
    userIsLoggedIn: false,
  },
  reducers: {
    toggleHiddenBalance(state) {
      state.hiddenBalance = !state.hiddenBalance;
    },
  },
});
