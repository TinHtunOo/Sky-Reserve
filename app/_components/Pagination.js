"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({
  startIndex,
  itemsPerPage,
  currentPage,
  totalPages,
  onPageChange,
  count,
}) {
  return (
    <div className="flex flex-wrap justify-between bg-bg shadow border-t border-stroke-faint items-center p-2">
      <p className="text-sm  text-fg">
        Showing <span className="font-semibold">{startIndex + 1} </span> to{" "}
        <span className="font-semibold">
          {currentPage === totalPages ? count : `${startIndex + itemsPerPage}`}
        </span>{" "}
        of <span className="font-semibold">{count}</span> results
      </p>
      <div className="flex gap-5 items-center">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-1 flex items-center hover:bg-brand-dark bg-brand text-bg  rounded-md disabled:opacity-50 text-sm cursor-pointer disabled:cursor-not-allowed"
        >
          <ChevronLeft size={16} />
          Previous
        </button>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-2 py-1 flex text-sm rounded-md hover:bg-brand-dark bg-brand text-bg items-center disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
        >
          Next
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
