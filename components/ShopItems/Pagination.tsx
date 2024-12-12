"use client";
import { useAppSelector } from "@/lib/store/hooks";
import React, { useEffect } from "react";

interface PaginationProps {
  paginationHandler: (pagination: number) => void;
  productsPerPage: number;
}

const Pagination = ({
  paginationHandler,
  productsPerPage,
}: PaginationProps) => {
  const [currPagination, setCurrPagination] = React.useState(1);
  const [paginationNumber, setPaginationNumber] = React.useState(0);

  const productsCount = useAppSelector((state) => state.products.productsCount);

  useEffect(() => {
    paginationHandler(currPagination);
    const totalPages = Math.ceil(productsCount / productsPerPage);
    setPaginationNumber(totalPages);
  }, [currPagination, productsCount]);

  return (
    <div className="flex items-center justify-center gap-4">
      <div>
        <button
          onClick={() =>
            setCurrPagination(currPagination === 1 ? 1 : currPagination - 1)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M15 18L9 12L15 6" stroke="black" />
          </svg>
        </button>
      </div>
      <div className="flex gap-2">
        {Array(paginationNumber)
          .fill({})
          .map((item, index) => (
            <div key={index}>
              {(index - currPagination > 0 && index !== paginationNumber - 1) ||
              (currPagination > index + 2 && index !== 0) ? (
                <div className={`${index % 3 === 0 ? "" : ""}`}>.</div>
              ) : (
                <button
                  onClick={() => setCurrPagination(index + 1)}
                  className={`py-1 px-3 rounded-md ${
                    index + 1 === currPagination
                      ? "bg-black text-white"
                      : "bg-[#F6F6F6]"
                  }`}
                >
                  {index + 1}
                </button>
              )}
            </div>
          ))}
      </div>
      <div>
        <button
          onClick={() =>
            setCurrPagination(
              currPagination !== paginationNumber ? currPagination + 1 : 12
            )
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M9 6L15 12L9 18" stroke="black" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
