/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export const Pagination = ({
  comicsPerPage,
  currentPage,
  setCurrentPage,
  totalComics,
}) => {
  const pageNumbers = [];

  console.log(Math.ceil(totalComics / comicsPerPage));

  for (let i = 1; i <= Math.ceil(totalComics / comicsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePreviusPage = (event) => {
    event.preventDefault();
    setCurrentPage(currentPage - 1);
  };
  const handleNextPage = (event) => {
    event.preventDefault();

    setCurrentPage(currentPage + 1);
  };

  const handleSpecificPage = (numberPage) => {
    setCurrentPage(numberPage);
  };

  return (
    <nav
      className="pagination is-centered mt-5"
      role="navigation"
      aria-label="pagination"
    >
      <a
        onClick={handlePreviusPage}
        href="#"
        className={`pagination-previous bg-red-800 border-none  ${
          currentPage === 1 ? "is-disabled" : ""
        }`}
      >
        Previous
      </a>
      <a
        onClick={handleNextPage}
        href="#"
        className={`pagination-next bg-red-800 border-none ${
          currentPage >= pageNumbers.length ? "is-disabled" : ""
        }`}
      >
        Next
      </a>
      <ul className="pagination-list">
        {pageNumbers?.map((element) => {
          return (
            <li key={element}>
              <a
                href="#"
                className={`pagination-link text-red-900 border-red-800 ${
                  element === currentPage
                    ? "is-current bg-red-800 text-gray-200 "
                    : ""
                } `}
                onClick={() => handleSpecificPage(element)}
              >
                {element}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
