import { createSlice } from "@reduxjs/toolkit";

export const ActiveView = createSlice({
  name: "Active View",
  initialState: { active: "Exit" },
  reducers: {
    setView(state, action) {
      state.active = action.payload;
    },
  },
});
