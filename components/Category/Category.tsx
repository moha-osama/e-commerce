import Image from "next/image";
import React from "react";

const categoriesIcons = [
  { title: "mobile", icon: "/icons/Phones.svg" },
  { title: "appliances", icon: "/icons/Smart Watches.svg" },
  { title: "laptop", icon: "/icons/Cameras.svg" },
  { title: "audio", icon: "/icons/Headphones.svg" },
  { title: "tv", icon: "/icons/Computers.svg" },
  { title: "gaming", icon: "/icons/Gaming.svg" },
  { title: "unknown", icon: "/icons/unknown-svgrepo-com.svg" },
];

interface CategoryData {
  status: string;
  message: string;
  categories: string[];
}

interface Props {
  categoryData: CategoryData;
}

type categoriesData = {
  props: Props;
};

interface CategoryProps {
  categoriesData: categoriesData;
}

const Category = ({ categoriesData }: CategoryProps) => {
  return (
    <div className="bg-[#FAFAFA] py-20  px-4">
      <div className="container mx-auto my-0 flex flex-col gap-8">
        <div>
          <h3 className="text-2xl font-medium leading-8 tracking-wide">
            Browse By Category
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 place-content-between place-items-center gap-4 md:gap-8">
          {categoriesData.props.categoryData.categories.map((category) => (
            <div
              key={category}
              className="text-center flex flex-col items-center w-full px-0 md:px-14 py-6 bg-[#EDEDED] rounded-xl"
            >
              <div className="relative">
                <Image
                  src={
                    categoriesIcons.find((item) => item.title === category)
                      ?.icon || "/icons/unknown-svgrepo-com.svg"
                  }
                  width={48}
                  height={48}
                  alt={category}
                />
              </div>
              <div>
                <p className="text-md font-medium leading-6 text-nowrap">
                  {category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
