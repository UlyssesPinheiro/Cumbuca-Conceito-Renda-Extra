import { combineReducers, createStore } from "@reduxjs/toolkit";
import { ActiveView } from "./ActiveViews";
import { UserConfig } from "./UserConfig";
import { UserProducts } from "./UserProducts";
import { OtherProducts } from "./OtherProducts";

import storage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  ActiveView: ActiveView.reducer,
  OtherProducts: OtherProducts.reducer,
  UserProducts: UserProducts.reducer,
  UserConfig: UserConfig.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, {
  ActiveView: ActiveView.getInitialState(),
  OtherProducts: OtherProducts.getInitialState(),
  UserProducts: UserProducts.getInitialState(),
  UserConfig: UserConfig.getInitialState(),
});

const persistor = persistStore(store);

export { store, persistor };
