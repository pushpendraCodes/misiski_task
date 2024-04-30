import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const maxPagesToShow = 9; // Maximum number of page links to display
    const pages = [];

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);
      let startPage = Math.max(1, currentPage - halfMaxPagesToShow);
      let endPage = Math.min(totalPages, currentPage + halfMaxPagesToShow);

      if (currentPage - startPage < halfMaxPagesToShow) {
        endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);
      } else if (endPage - currentPage < halfMaxPagesToShow) {
        startPage = Math.max(endPage - maxPagesToShow + 1, 1);
      }

      if (startPage > 1) {
        pages.push(1);
        if (startPage > 2) {
          pages.push('...');
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pages.push('...');
        }
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
<>

    <div className=" hidden md:flex justify-center items-center space-x-2 my-5">
      {/* Previous button */}
      <button
        className="hidden md:block border border-black px-3 py-1 disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        Previous
      </button>

      {/* Page numbers */}
      {getPageNumbers().map((page, index) => (
        <React.Fragment key={index}>
          {page === '...' ? (
            <span className="mx-1">...</span>
          ) : (
            <button
              className={`${
                page === currentPage ? 'font-bold bg-black text-white' : ''
              } hidden md:inline-block px-3 py-1 rounded-full`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          )}
        </React.Fragment>
      ))}

      {/* Next button */}
      <button
        className="hidden md:block border border-black px-3 py-1 disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        Next
      </button>
    </div>


    <div className="flex md:hidden flex-col items-center mt-5">
      <button
        className={`border border-black px-3 py-1 rounded disabled:opacity-50 ${
          currentPage <= 1 ? 'opacity-50 cursor-default' : ''
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        Previous
      </button>

      <div className="flex flex-wrap justify-center mt-3">
        {getPageNumbers().map((page, index) => (
          <React.Fragment key={index}>
            {page === '...' ? (
              <span className="mx-1">...</span>
            ) : (
              <button
                className={`${
                  page === currentPage
                    ? 'font-bold bg-black text-white'
                    : 'text-black'
                } px-3 py-1 rounded-full mb-2 mr-2`}
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
            )}
          </React.Fragment>
        ))}
      </div>

      <button
        className={`border border-black px-3 py-1 rounded disabled:opacity-50 mt-3 ${
          currentPage >= totalPages ? 'opacity-50 cursor-default' : ''
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        Next
      </button>
    </div>
    </>
  );
};

export default Pagination;
