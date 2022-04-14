import { createSlice } from "@reduxjs/toolkit";

export const UserConfig = createSlice({
  name: "User Config",
  initialState: {
    hiddenBalance: false,
    userIsLoggedIn: false,
    userName: "Usuário",
  },
  reducers: {
    toggleHiddenBalance(state) {
      state.hiddenBalance = !state.hiddenBalance;
    },
    setHiddenBalance(state, action) {
      state.hiddenBalance = action.payload;
    },
    setUserIsLoggedIn(state, action) {
      state.userIsLoggedIn = action.payload;
    },
    setUserName(state, action) {
      state.userIsLoggedIn = true;
      state.userName = action.payload;
    },
    clearUserName(state) {
      state.userIsLoggedIn = false;
      state.userName = "Usuário";
    },
  },
});
