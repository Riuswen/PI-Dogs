import React from 'react';
import styles from './Pagination.module.css'; 

const Pagination = ({ currentPage, totalPages, onPageChange, dogsPerPage }) => {
  const handlePrevClick = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    onPageChange(currentPage + 1);
  };

  const startIndex = (currentPage - 1) * dogsPerPage;
  const endIndex = startIndex + dogsPerPage;

  return (
    <div className={styles.pagination}>
      <button
        className={styles.paginationButton}
        disabled={currentPage === 1}
        onClick={handlePrevClick}
      >
        Prev
      </button>
      <span className={styles.pageInfo}>
        <span className={styles.pageNumber}>Page {currentPage}</span> of{' '}
        <span className={styles.totalPages}>{totalPages}</span>
      </span>
      <button
        className={styles.paginationButton}
        disabled={currentPage === totalPages}
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
