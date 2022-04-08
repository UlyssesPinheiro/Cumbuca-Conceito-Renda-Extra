import { configureStore } from "@reduxjs/toolkit";
import { ActiveView } from "./ActiveViews";

const store = configureStore({
  reducer: { ActiveView: ActiveView.reducer },
});

export default store;
