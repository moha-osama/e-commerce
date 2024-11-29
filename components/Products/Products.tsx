"use client";

import React from "react";
import ProductsCard from "./ProductsCard";

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

interface ProductsData {
  status: string;
  message: string;
  products: Product[];
}

interface Props {
  productsData: ProductsData;
}
interface productsProps {
  props: Props;
}

interface ProductsProps {
  productsData: productsProps;
}

const Products = ({ productsData }: ProductsProps) => {
  const filteredProducts = React.useMemo(() => {
    return productsData.props.productsData.products.filter(
      (product) => product.onSale === true
    );
  }, [productsData.props.productsData.products]);

  return (
    <div className="container mx-auto py-14">
      <div className="py-8">
        <h1 className="text-[#000] text-2xl left-8 font-medium">
          Discounts up to -50%
        </h1>
      </div>
      <div className="grid px-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 place-content-between place-items-center">
        {filteredProducts.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
