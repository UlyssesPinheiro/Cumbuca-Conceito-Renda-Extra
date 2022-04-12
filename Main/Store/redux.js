import { configureStore } from "@reduxjs/toolkit";
import { ActiveView } from "./ActiveViews";
import { UserConfig } from "./UserConfig";
import { UserProducts } from "./UserProducts";

const store = configureStore({
  reducer: {
    ActiveView: ActiveView.reducer,
    UserProducts: UserProducts.reducer,
    UserConfig: UserConfig.reducer,
  },
});

export default store;
