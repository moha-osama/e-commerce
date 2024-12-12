"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useAppDispatch } from "@/lib/store/hooks";
import { productsActions } from "@/lib/slice/products-slice";
import { fetchProductsData } from "@/lib/store/products-actions";

interface FilterOption {
  label?: string;
  min?: number;
  max?: number;
}

interface FilterItemProps {
  category: string;
  filterOptions: string[] | FilterOption[];
}

const FilterItem = ({ category, filterOptions }: FilterItemProps) => {
  const dispatch = useAppDispatch();
  const [collapse, setCollapse] = React.useState(false);
  const optionsRef = useRef<HTMLDivElement>(null);
  const [optionsDivHeight, setOptionsDivHeight] = React.useState<number | null>(
    null
  );
  const [selectFilter, setSelectFilter] = React.useState(null);

  const selectFilterHandler = (category: string, filter: string) => {
    dispatch(productsActions.applyFilter({ category, filter }));
  };

  useEffect(() => {
    if (optionsRef.current?.clientHeight) {
      setOptionsDivHeight(optionsRef.current?.clientHeight);
    }
  }, []);

  return (
    <React.Fragment>
      <div>
        <div className="flex w-full justify-between items-center pb-3">
          <h3 className="text-lg font-medium">{category}</h3>
          <button onClick={() => setCollapse((preState) => !preState)}>
            {!collapse ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 8.295L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.295Z"
                  fill="black"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.59 8.29498L12 12.875L7.41 8.29498L6 9.70498L12 15.705L18 9.70498L16.59 8.29498Z"
                  fill="black"
                />
              </svg>
            )}
          </button>
        </div>
        <hr />
      </div>
      <div
        ref={optionsRef}
        className={`flex flex-col my-4 md:my-0 gap-4 duration-300 transition-all overflow-hidden`}
        style={{ height: collapse ? "0px" : `${optionsDivHeight}px` }}
      >
        {filterOptions.length > 2 && (
          <div className="flex py-2 px-4 bg-[#F5F5F5] rounded-lg gap-2 w-5/6">
            <Image
              src="icons/Search.svg"
              width={24}
              height={24}
              quality={100}
              alt="search"
            />
            <input
              type="text"
              className="bg-inherit w-full outline-none"
              placeholder="Search"
            />
          </div>
        )}
        <ul className="flex flex-col items-start gap-2">
          {filterOptions.map((option) => (
            <li key={Math.random()} className="w-full">
              {typeof option === "string" ? (
                <div className="flex items-center justify-start gap-2">
                  <input
                    id={option}
                    type="checkbox"
                    onClick={() => selectFilterHandler(category, option)}
                  />
                  <label
                    htmlFor={option}
                    className="text-md leading-6 font-medium text-black"
                  >
                    {option}
                  </label>
                </div>
              ) : (
                <div>
                  <div className="flex flex-col w-3/4 justify-center gap-2">
                    <input
                      id={option.label}
                      type="range"
                      max={option.max}
                      min={option.min}
                    />
                    <div className="flex items-center justify-between w-full">
                      <label className="text-md leading-6 font-medium text-black">
                        {option.min}
                      </label>
                      <label className="text-md leading-6 font-medium text-black">
                        {option.max}
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default FilterItem;
