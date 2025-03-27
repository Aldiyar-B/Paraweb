import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Switcher.module.scss';
import { icons } from '../icons';

const getIcon = (iconName) =>
  icons[`../assets/svg/icons/${iconName}.svg`] || null;

const Switcher = ({
  checked = false,
  disabled = false,
  onChange,
  leftIcon,
  rightIcon,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    if (!disabled) {
      setIsChecked(!isChecked);
      onChange && onChange(!isChecked);
    }
  };

  return (
    <label
      className={`${styles.switcher} ${disabled ? styles['switcher--disabled'] : ''}`}
    >
      <input
        type="checkbox"
        checked={isChecked}
        disabled={disabled}
        onChange={handleToggle}
        className={styles.switcher__input}
      />

      {/* Внешний контейнер */}
      <span className={styles.switcher__slider}>
        {/* Левая иконка */}
        <span
          className={styles.switcher__icon}
          dangerouslySetInnerHTML={{ __html: getIcon(leftIcon) }}
        />

        {/* Индикатор с белой иконкой при активации */}
        <span
          className={styles.switcher__indicator}
          dangerouslySetInnerHTML={{
            __html: getIcon(isChecked ? rightIcon : leftIcon),
          }}
        />

        {/* Правая иконка */}
        <span
          className={styles.switcher__icon}
          dangerouslySetInnerHTML={{ __html: getIcon(rightIcon) }}
        />
      </span>
    </label>
  );
};

Switcher.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  leftIcon: PropTypes.string.isRequired,
  rightIcon: PropTypes.string.isRequired,
};

export default Switcher;
