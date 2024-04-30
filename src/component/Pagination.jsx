import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Function to generate an array of page numbers
  const getPageNumbers = () => {
    const maxPagesToShow = 9; // Maximum number of page links to display (excluding ellipses)
    const pages = [];

    // Case 1: If there are fewer pages than the max pages to show, display all pages
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Case 2: If there are more pages, display a condensed version with ellipses
      const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);

      // Display pages around the current page
      let startPage = Math.max(1, currentPage - halfMaxPagesToShow);
      let endPage = Math.min(totalPages, currentPage + halfMaxPagesToShow);

      // Adjust startPage and endPage if the current page is near the start or end
      if (currentPage - startPage < halfMaxPagesToShow) {
        endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);
      } else if (endPage - currentPage < halfMaxPagesToShow) {
        startPage = Math.max(endPage - maxPagesToShow + 1, 1);
      }

      // Add first page and ellipsis if necessary
      if (startPage > 1) {
        pages.push(1);
        if (startPage > 2) {
          pages.push("...");
        }
      }

      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      // Add last page and ellipsis if necessary
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pages.push("...");
        }
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center space-x-2 my-5">
      {/* Previous button */}
      <button
        className=" border border-black px-3 py-1 disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        Previous
      </button>

      {/* Page numbers */}
      {getPageNumbers().map((page, index) => (
        <React.Fragment key={index}>
          {page === "..." ? (
            <span className="mx-1">...</span>
          ) : (
            <button
              className={`${
                page === currentPage ? "font-bold bg-black" : ""
              }  px-2 py-1 rounded-full`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          )}
        </React.Fragment>
      ))}

      {/* Next button */}
      <button
         className=" border border-black px-3 py-1 disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
