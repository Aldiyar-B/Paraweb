import React from 'react';
import styles from './Tab.module.scss';

const Tab = ({ label, count, isActive, onClick }) => {
  return (
    <button
      className={`${styles.tab} ${isActive ? styles.active : ''}`}
      onClick={onClick}
    >
      <span className={styles.label}>{label}</span>
      {count !== undefined && (
        <span className={`${styles.badge} ${isActive ? styles.active : ''}`}>
          {count > 99 ? '99+' : count}
        </span>
      )}
    </button>
  );
};

export default Tab;
