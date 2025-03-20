import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';

const Breadcrumbs = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav className={styles.breadcrumbs}>
      {items.map((item, index) => (
        <span key={index} className={styles.breadcrumb}>
          {item.disabled ? (
            <span className={styles.disabled}>{item.label}</span>
          ) : index < items.length - 1 ? (
            <Link to={item.path} className={styles.link}>
              {item.label}
            </Link>
          ) : (
            <span className={styles.current}>{item.label}</span>
          )}
          {index < items.length - 1 && (
            <span className={styles.separator}> • </span>
          )}
        </span>
      ))}
    </nav>
  );
};

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
    })
  ).isRequired,
};

export default Breadcrumbs;
