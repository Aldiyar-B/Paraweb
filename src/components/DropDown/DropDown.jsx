import React from 'react';
import styles from './DropDown.module.scss';
import { icons } from '../icons';

const Dropdown = ({ text, checkbox = false, socials = null }) => {
  const getIcon = (iconName) =>
    icons[`../assets/svg/icons/${iconName}.svg`] || null;

  return (
    <div className={styles.dropdownItem}>
      {checkbox && (
        <input type="checkbox" className={styles['dropdownItem__checkbox']} />
      )}
      {socials && getIcon(socials) && (
        <span
          className={styles['dropdownItem__icon']}
          dangerouslySetInnerHTML={{ __html: getIcon(socials) }}
        />
      )}
      <span className={styles['dropdownItem__text']}>{text}</span>
    </div>
  );
};

export default Dropdown;
