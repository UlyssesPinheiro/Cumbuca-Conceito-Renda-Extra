import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [] };

export const OtherProducts = createSlice({
  name: "Other Products",
  initialState,
  reducers: {
    addProducts(state, action) {
      state.products = action.payload;
    },
    clearProducts(state) {
      state.products = initialState;
    },
  },
});
