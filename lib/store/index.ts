import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../slice/products-slice";

export const makeStore = () => {
  return configureStore({
    reducer: { products: productsSlice.reducer },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
