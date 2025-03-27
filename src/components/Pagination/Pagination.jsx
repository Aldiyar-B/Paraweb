import React, { useState } from 'react';
import styles from './Pagination.module.scss';
import { icons } from '../icons';

const getIcon = (iconName) =>
  icons[`../assets/svg/icons/${iconName}.svg`] || null;

const Pagination = ({
  totalPages,
  maxVisiblePages = 5,
  onPageChange,
  disabled = false,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (page) => {
    if (!disabled && page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      onPageChange?.(page);
    }
  };

  const getVisiblePages = () => {
    let pages = [];
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, currentPage + 2);

    if (start > 1) pages.push(1);
    if (start > 2) pages.push('...');

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) pages.push('...');
    if (end < totalPages) pages.push(totalPages);

    return pages;
  };

  return (
    <nav
      className={`${styles.pagination} ${
        disabled ? styles['pagination--disabled'] : ''
      }`}
    >
      <button
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1 || disabled}
        aria-label="Previous page"
        className={`${styles['pagination__button']} ${
          disabled ? styles['pagination__button--disabled'] : ''
        }`}
      >
        <span
          className={styles['pagination__button--icon']}
          dangerouslySetInnerHTML={{ __html: getIcon('chevron-left') }}
        />
      </button>

      {getVisiblePages().map((page, index) =>
        page === '...' ? (
          <span
            key={index}
            className={styles.pagination__dots}
            title="More pages"
          >
            {page}
          </span>
        ) : (
          <button
            key={index}
            onClick={() => changePage(page)}
            className={`${styles['pagination__button']} ${
              currentPage === page ? styles['pagination__button--active'] : ''
            } ${disabled ? styles['pagination__button--disabled'] : ''}`}
            disabled={disabled}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages || disabled}
        aria-label="Next page"
        className={`${styles['pagination__button']} ${
          disabled ? styles['pagination__button--disabled'] : ''
        }`}
      >
        <span
          className={styles['pagination__button--icon']}
          dangerouslySetInnerHTML={{ __html: getIcon('chevron-right') }}
        />
      </button>
    </nav>
  );
};

export default Pagination;
