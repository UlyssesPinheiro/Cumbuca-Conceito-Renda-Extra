import { createSlice } from "@reduxjs/toolkit";

const stateDefault = {
  amount: "11",
  description: "1",
  title: "aaaaaa",
  photos: [],
  price: "50",
  id: 1,
};

export const UserProducts = createSlice({
  name: "User Products",
  initialState: [],
  reducers: {
    addProduct(state, action) {
      state.push(action.payload);
    },
    editProductAmount(state, action) {
      //   state.push(action.payload);
    },
    removeProduct(state, action) {
      //   state.push(action.payload);
    },
  },
});
