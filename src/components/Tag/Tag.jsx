import React from 'react';
import styles from './Tag.module.scss';

const Tag = ({ label, color = 'default' }) => {
  if (!label) return null;

  return (
    <div className={`${styles.tag} ${styles[`tag--${color}`]}`}>
      {label && <span className={styles.tag__label}>{label}</span>}
    </div>
  );
};

export default Tag;
