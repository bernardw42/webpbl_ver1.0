import React, { useState, useEffect } from 'react';

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const [maxPageNumbersToShow, setMaxPageNumbersToShow] = useState(10);

  useEffect(() => {
    const handleResize = () => {
      setMaxPageNumbersToShow(window.innerWidth <= 768 ? 5 : 10);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial value

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = () => {
    const startIndex = Math.max(0, Math.min(pageNumbers.length - maxPageNumbersToShow, currentPage - Math.floor(maxPageNumbersToShow / 2) - 1));
    const endIndex = Math.min(pageNumbers.length, startIndex + maxPageNumbersToShow);
    
    return pageNumbers.slice(startIndex, endIndex).map(number => (
      <li key={number} className='page-item'>
        <button
          className={`page-link py-4 px-6 font-bold ${number === currentPage ? 'bg-red-500 text-white' : 'text-[#033C5A]'} hover:bg-red-500`}
          onClick={(e) => { e.preventDefault(); handlePaginationClick(number); }}
        >
          {number}
        </button>
      </li>
    ));
  };

  const handlePaginationClick = (pageNumber: number) => {
    paginate(pageNumber);
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  return (
    <nav className="flex items-center justify-center">
      <ul className='pagination flex items-center space-x-0'>
        <li className='page-item'>
          <button
            className="page-link py-4 px-6 font-bold text-[#033C5A] hover:bg-red-500"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage === 1) {
                handlePaginationClick(pageNumbers[pageNumbers.length - 1]);
              } else {
                handlePaginationClick(currentPage - 1);
              }
            }}
          >
            &laquo;
          </button>
        </li>
        {renderPageNumbers()}
        <li className='page-item'>
          <button
            className="page-link py-4 px-6 font-bold text-[#033C5A] hover:bg-red-500"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage === pageNumbers.length) {
                handlePaginationClick(pageNumbers[0]);
              } else {
                handlePaginationClick(currentPage + 1);
              }
            }}
          >
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
