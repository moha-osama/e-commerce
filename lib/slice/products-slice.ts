import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "@/types";

const productsSlice = createSlice({
  name: "slice",
  initialState: {
    products: [] as Product[],
    productsOnSale: [] as Product[],
    productsCount: 0,
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload.products;
      state.productsOnSale = state.products.filter(
        (product) => product.onSale === true
      );
      state.productsCount = action.payload.products.length;
    },
    applyFilter(state, action) {
      let { category, filter } = action.payload;
    },
  },
});

export const productsActions = productsSlice.actions;
export default productsSlice;
