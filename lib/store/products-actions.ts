import { ProductsResponse } from "@/types";
import { productsActions } from "../slice/products-slice";

export const fetchProductsData = (pagination?: number) => {
  return async (dispatch: any) => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://fakestoreapi.in/api/products${
          pagination ? `?limit=${pagination}` : ""
        }`
      );
      const products = await response.json();
      return products;
    };
    try {
      const productsData: ProductsResponse = await sendRequest();
      dispatch(
        productsActions.setProducts({ products: productsData.products })
      );
    } catch {
      throw new Error("can't get data!");
    }
  };
};
