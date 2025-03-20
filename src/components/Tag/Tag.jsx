import React from 'react';
import styles from './Tag.module.scss';

const Tag = ({ label, subtitle, color = 'default' }) => {
  if (!label) return null;

  return (
    <div className={`${styles.tag} ${styles[color]}`}>
      {label && <span className={styles.label}>{label}</span>}
      {/* {subtitle && <span className={styles.subtitle}>{subtitle}</span>} */}
    </div>
  );
};

export default Tag;
