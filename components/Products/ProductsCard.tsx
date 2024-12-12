"use client";

import Image from "next/image";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  brand: string;
  model: string;
  color: string;
  category: string;
  discount?: number;
  onSale?: boolean;
  popular?: boolean;
}

interface ProductsCard {
  product: Product;
}

const ProductsCard = ({ product }: ProductsCard) => {
  const [imageLoading, setImageLoading] = React.useState(true);
  return (
    <div className="bg-[#F6F6F6] rounded-lg py-6 px-4 w-full">
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="relative">
          {imageLoading && <Skeleton className="h-64" />}
          <Image
            className={`object-contain rounded-md ${
              !imageLoading ? "h-[14rem] w-full" : "h-0"
            }`}
            width={1024}
            height={1024}
            quality={100}
            src={product.image}
            alt={product.title}
            onLoadingComplete={() => setImageLoading(false)}
          />
        </div>
        <div className="w-full">
          {!imageLoading ? (
            <h1 className="text-[#000]  text-md font-medium leading-6 line-clamp-2 min-h-12">
              {product.title}
            </h1>
          ) : (
            <Skeleton className="" count={2} />
          )}
          {imageLoading && <Skeleton />}
          <div
            className={`flex flex-col items-center justify-center ${
              !imageLoading && "min-h-16"
            }`}
          >
            {!imageLoading && (
              <>
                {product.onSale && product.discount && (
                  <span className="text-green-500 pt-3 text-2xl font-semibold left-6 tracking-wider">
                    ${product.price - product.discount}
                  </span>
                )}
                <p
                  className={`text-[#000] font-semibold left-6 tracking-wider ${
                    product.onSale ? "line-through" : "text-2xl"
                  }`}
                >
                  ${product.price}
                </p>
              </>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 justify-center w-full">
          <button className="bg-black text-white py-3 w-11/12 rounded-lg">
            Buy Now
          </button>
          <button className="bg-white p-2 rounded-lg duration-300 fill-red-500">
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
