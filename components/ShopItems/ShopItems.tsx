"use client";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import React, { useEffect } from "react";
import ProductsCard from "../Products/ProductsCard";
import Pagination from "./Pagination";
import type { Product } from "@/types";

const productsPerPage = 9;

const ShopItems = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);

  const [productsPreview, setProductsPreview] = React.useState<Product[]>([]);
  const [currPage, setCurrPage] = React.useState(1);

  const paginationHandler = (pagination: number) => {
    setCurrPage(pagination);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const startIndex = (currPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    setProductsPreview(products.slice(startIndex, endIndex));
  }, [currPage, products]);

  return (
    <div className="">
      <div className="py-3 md:py-6">
        <div>
          <p>
            Selected Products: <strong>{productsPerPage}</strong>
          </p>
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4 py-6 justify-items-start">
        {productsPreview.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        paginationHandler={paginationHandler}
        productsPerPage={productsPerPage}
      />
    </div>
  );
};

export default ShopItems;
