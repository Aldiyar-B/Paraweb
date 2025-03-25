import React from 'react';
import styles from './LinkComponent.module.scss';
import { icons } from '../Switcher/icons';

const getIcon = (iconName) =>
  icons[`../../assets/svg/icons/${iconName}.svg`] || null;

const LinkComponent = ({
  href,
  children,
  icon,
  type = 'text',
  size = 'small',
  disabled = false,
}) => {
  return (
    <span className={styles.linkWrapper}>
      {icon && getIcon(icon) && (
        <span
          className={`${styles.icon} ${styles[type]}`}
          dangerouslySetInnerHTML={{ __html: getIcon(icon) }}
        />
      )}
      <a
        href={disabled ? undefined : href}
        role={disabled ? 'link' : undefined}
        aria-disabled={disabled}
        className={`${styles.link} ${styles[size]}  ${disabled ? styles.disabled : ''}`}
      >
        {children && <span>{children}</span>}
      </a>
    </span>
  );
};

export default LinkComponent;
