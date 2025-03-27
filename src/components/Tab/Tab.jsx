import React from 'react';
import styles from './Tab.module.scss';

const Tab = ({ label, count, isActive, onClick }) => {
  return (
    <button
      className={`${styles.tab} ${isActive ? styles['tab--active'] : ''}`}
      onClick={onClick}
    >
      <span className={styles.label}>{label}</span>
      {count !== undefined && (
        <span
          className={`${styles.tab__badge} ${isActive ? styles['tab__badge--active'] : ''}`}
        >
          {count > 99 ? '99+' : count}
        </span>
      )}
    </button>
  );
};

export default Tab;
