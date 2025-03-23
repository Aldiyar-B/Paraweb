import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Toggle.module.scss';
import { icons } from './icons';

const Toggle = ({ initialState = false, onChange, disabled }) => {
  const [isChecked, setIsChecked] = useState(initialState);
  const leftIcon = 'check'; // Теперь всегда "check"

  const getIcon = (iconName) =>
    icons[`../../assets/svg/icons/${iconName}.svg`] || null;

  const handleToggle = () => {
    if (!disabled) {
      const newState = !isChecked;
      setIsChecked(newState);
      onChange && onChange(newState);
    }
  };

  return (
    <label
      className={`${styles.toggle} ${isChecked ? styles.active : ''} ${disabled ? styles.disabled : ''}`}
    >
      <input
        type="checkbox"
        checked={isChecked}
        disabled={disabled}
        onChange={handleToggle}
      />

      <span className={`${styles.slider} ${disabled ? styles.disabled : ''}`}>
        <span
          className={styles.icon}
          dangerouslySetInnerHTML={{ __html: getIcon(leftIcon) }}
        />
        {/* Индикатор */}
        <span
          className={`${styles.indicator} ${disabled ? styles.disabled : ''}`}
        ></span>
      </span>
    </label>
  );
};

Toggle.propTypes = {
  initialState: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Toggle;
