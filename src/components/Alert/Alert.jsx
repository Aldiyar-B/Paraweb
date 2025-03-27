import React from 'react';
import styles from './Alert.module.scss';
import { icons } from '../Alert/icons';

const getIcon = (iconName) =>
  icons[`../../assets/svg/icons/${iconName}.svg`] || null;

const Alert = ({ type = 'success', title, message, onClose }) => {
  const successIcon = 'check-circle';
  const errorIcon = 'alert-circle';
  const X = 'x';

  return (
    <div className={`${styles.alert} ${styles[type]}`}>
      <div className={styles.icon}>
        {type === 'success' ? (
          <span
            className={`${styles.icon} `}
            dangerouslySetInnerHTML={{ __html: getIcon(successIcon) }}
          />
        ) : (
          <span
            className={`${styles.icon} `}
            dangerouslySetInnerHTML={{ __html: getIcon(errorIcon) }}
          />
        )}
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.message}>{message}</p>
      </div>
      <button className={styles.close} onClick={onClose}>
        <span
          className={`${styles.icon} `}
          dangerouslySetInnerHTML={{ __html: getIcon(X) }}
        />
      </button>
    </div>
  );
};

export default Alert;
