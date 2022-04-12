import { createSlice } from "@reduxjs/toolkit";

export const UserProducts = createSlice({
  name: "User Products",
  initialState: [
    { price: 50, title: "Nome do produto", key: 1 },
    { price: 50, title: "Nome do produto", key: 2 },
    { price: 50, title: "Nome do produto", key: 3 },
    { price: 50, title: "Nome do produto", key: 4 },
    { price: 50, title: "Nome do produto", key: 5 },
    { price: 50, title: "Nome do produto", key: 6 },
    { price: 50, title: "Nome do produto", key: 7 },
    { price: 50, title: "Nome do produto", key: 8 },
    { price: 50, title: "Nome do produto", key: 9 },
    { price: 50, title: "Nome do produto", key: 10 },
  ],
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
