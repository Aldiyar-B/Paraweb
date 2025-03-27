import React from 'react';
import styles from './Alert.module.scss';
import { icons } from '../icons';

const getIcon = (iconName) =>
  icons[`../assets/svg/icons/${iconName}.svg`] || null;

const Alert = ({ type = 'success', title, message, onClose }) => {
  const successIcon = 'check-circle';
  const errorIcon = 'alert-circle';
  const closeIcon = 'x';

  return (
    <div className={`${styles.alert} ${styles[`alert--${type}`]}`}>
      <div className={styles.alert__icon}>
        {type === 'success' ? (
          <span
            className={styles.alert__icon}
            dangerouslySetInnerHTML={{ __html: getIcon(successIcon) }}
          />
        ) : (
          <span
            className={styles.alert__icon}
            dangerouslySetInnerHTML={{ __html: getIcon(errorIcon) }}
          />
        )}
      </div>
      <div className={styles.alert__content}>
        <p className={styles.alert__title}>{title}</p>
        <p className={styles.alert__message}>{message}</p>
      </div>
      <button className={styles.alert__close} onClick={onClose}>
        <span
          className={styles.alert__icon}
          dangerouslySetInnerHTML={{ __html: getIcon(closeIcon) }}
        />
      </button>
    </div>
  );
};

export default Alert;
