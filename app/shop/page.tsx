import React from "react";
import ShopFilter from "@/components/ShopFilter/ShopFilter";
import ShopItems from "@/components/ShopItems/ShopItems";

const page = () => {
  return (
    <div className="container px-4 mx-auto my-0">
      <div className="hidden md:blockpy-10">Home &gt; Cataglog &gt; Shop</div>
      <div className="grid md:grid-cols-4">
        <div>
          <ShopFilter />
        </div>
        <div className="md:col-span-3">
          <ShopItems />
        </div>
      </div>
    </div>
  );
};

export default page;
