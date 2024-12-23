"use client";

import React from "react";
import FilterItem from "./FilterItem";
import { filters } from "@/constants";

const ShopFilter = () => {
  const [filterOpened, setFilterOpened] = React.useState(false);
  return (
    <div>
      <div className="py-11">
        <button
          onClick={() => setFilterOpened((preState) => !preState)}
          className="flex md:hidden items-center justify-between min-w-40 p-4 border border-[#D4D4D4] rounded-lg"
        >
          Filters
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M20.5 19H14.5M14.5 19C14.5 17.8954 13.6046 17 12.5 17C11.3954 17 10.5 17.8954 10.5 19M14.5 19C14.5 20.1046 13.6046 21 12.5 21C11.3954 21 10.5 20.1046 10.5 19M10.5 19H4.5M20.5 12L8.5 12M8.5 12C8.5 10.8954 7.6046 10 6.5 10C5.3954 10 4.5 10.8954 4.5 12C4.5 13.1046 5.3954 14 6.5 14C7.6046 14 8.5 13.1046 8.5 12ZM16.5 5L4.5 5M16.5 5C16.5 6.1046 17.3954 7 18.5 7C19.6046 7 20.5 6.1046 20.5 5C20.5 3.8954 19.6046 3 18.5 3C17.3954 3 16.5 3.8954 16.5 5Z"
              stroke="black"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          !filterOpened ? "hidden" : ""
        } md:flex flex-col gap-4 pr-8`}
      >
        {filters.map((filter) => (
          <FilterItem
            key={filter.category}
            category={filter.category}
            filterOptions={filter.options}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopFilter;
