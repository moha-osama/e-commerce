"use client";

import React, { useEffect } from "react";
import ProductsCard from "./ProductsCard";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { fetchProductsData } from "@/lib/store/products-actions";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Products = () => {
  const dispatch = useAppDispatch();
  const productsOnSale = useAppSelector(
    (state) => state.products.productsOnSale
  );
  useEffect(() => {
    dispatch(fetchProductsData());
  }, []);

  return (
    <div className="container mx-auto py-14 px-4">
      <div className="py-8">
        <h1 className="text-[#000] text-2xl left-8 font-medium">
          Discounts up to -50%
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6  place-content-between place-items-center">
        {productsOnSale.length > 0
          ? productsOnSale.map((product) => (
              <ProductsCard key={product.id} product={product} />
            ))
          : Array(6)
              .fill(null)
              .map((item, index) => (
                <div key={index} className="w-full ">
                  <Skeleton className="h-96 w-full" />
                </div>
              ))}
      </div>
    </div>
  );
};

export default Products;
