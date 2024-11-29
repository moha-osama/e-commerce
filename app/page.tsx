import Banner from "@/components/Banner/Banner";
import Hero from "@/components/Hero/Hero";
import Category from "@/components/Category/Category";
import Products from "@/components/Products/Products";
import Image from "next/image";

export default async function Home() {
  const categoriesData = await GetCategories();
  const productsData = await GetProducts();

  const [categories, products] = await Promise.all([
    categoriesData,
    productsData,
  ]);

  return (
    <>
      <Hero />
      <Banner />
      <Category categoriesData={categories} />
      <Products productsData={products} />
      <div className="relative ">
        <div className="text-center w-4/5 flex flex-col items-center justify-center z-50 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <h1 className="text-5xl font-thin tracking-tighter leading-[4.5rem] text-white">
            Big Summer <strong className="font-bold">Sale</strong>
          </h1>
          <p className="text-[#787878] text-md font-normal leading-8">
            Commodo fames vitae vitae leo mauris in. Eu consequat.
          </p>
          <div className="w-full flex items-center justify-center py-10">
            <button className="text-white py-4 px-14 border border-white rounded-md font-medium">
              Shop Now
            </button>
          </div>
        </div>
        <div className="relative">
          <Image
            height={448}
            width={1600}
            quality={100}
            className="object-cover w-screen hidden md:block"
            src="/Banner2.png"
            alt="Banner"
          />
          <Image
            height={600}
            width={1600}
            quality={100}
            className="object-cover w-screen md:hidden"
            src="/Banner2-sm.png"
            alt="Banner"
          />
        </div>
      </div>
    </>
  );
}

async function GetCategories() {
  const category = await fetch("https://fakestoreapi.in/api/products/category");
  const categoryData = await category.json();
  return { props: { categoryData } };
}

async function GetProducts() {
  const products = await fetch("https://fakestoreapi.in/api/products");
  const productsData = await products.json();

  return { props: { productsData } };
}
