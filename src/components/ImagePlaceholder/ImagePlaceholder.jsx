import React from 'react';
import styles from './ImagePlaceholder.module.scss';

const ImagePlaceholder = ({ src, size = 'medium' }) => {
  return (
    <div className={`${styles.placeholder} ${styles[`placeholder--${size}`]}`}>
      {src && <img src={src} alt="Placeholder" className={styles.image} />}
    </div>
  );
};

export default ImagePlaceholder;
