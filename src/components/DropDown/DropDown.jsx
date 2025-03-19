import React from 'react';
import styles from './DropDown.module.scss';

const icons = import.meta.glob('../../assets/svg/icons/*.svg', {
  eager: true,
  as: 'raw',
});

const Dropdown = ({ text, checkbox = false, socials = null }) => {
  const getIcon = (iconName) =>
    icons[`../../assets/svg/icons/${iconName}.svg`] || null;

  return (
    <div className={styles.dropdownItem}>
      {checkbox && <input type="checkbox" className={styles.checkbox} />}
      {socials && getIcon(socials) && (
        <span
          className={styles.icon}
          dangerouslySetInnerHTML={{ __html: getIcon(socials) }}
        />
      )}
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default Dropdown;
