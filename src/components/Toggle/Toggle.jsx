import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Toggle.module.scss';
import { icons } from '../icons';

const Toggle = ({ initialState = false, onChange, disabled }) => {
  const [isChecked, setIsChecked] = useState(initialState);
  const leftIcon = 'check';

  const getIcon = (iconName) =>
    icons[`../assets/svg/icons/${iconName}.svg`] || null;

  const handleToggle = () => {
    if (!disabled) {
      const newState = !isChecked;
      setIsChecked(newState);
      onChange && onChange(newState);
    }
  };

  return (
    <label
      className={`${styles.toggle} ${
        isChecked ? styles['toggle--active'] : ''
      } ${disabled ? styles['toggle--disabled'] : ''}`}
    >
      <input
        className={styles.toggle__input}
        type="checkbox"
        checked={isChecked}
        disabled={disabled}
        onChange={handleToggle}
      />

      <span className={styles.toggle__slider}>
        <span
          className={styles.toggle__icon}
          dangerouslySetInnerHTML={{ __html: getIcon(leftIcon) }}
        />
        <span className={styles.toggle__indicator}></span>
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
