import React from 'react';
import styles from './LinkComponent.module.scss';
import { icons } from '../icons';

const getIcon = (iconName) =>
  icons[`../assets/svg/icons/${iconName}.svg`] || null;

const LinkComponent = ({
  href,
  children,
  icon,
  type = 'text',
  size = 'small',
  disabled = false,
}) => {
  return (
    <span className={`${styles.link}  ${styles[`link--${size}`]}`}>
      {icon && getIcon(icon) && (
        <span
          className={`${styles.link__icon} ${styles[`link--${type}`]} ${styles[`link__icon--${size}`]}`}
          dangerouslySetInnerHTML={{ __html: getIcon(icon) }}
        />
      )}
      <a
        href={disabled ? undefined : href}
        role={disabled ? 'link' : undefined}
        aria-disabled={disabled}
        className={`${styles.link__element} ${disabled ? styles['link__element--disabled'] : ''}`}
      >
        {children && <span>{children}</span>}
      </a>
    </span>
  );
};

export default LinkComponent;
