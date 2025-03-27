import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ToggleInput.module.scss';

const ToggleInput = ({ type, defaultChecked = false, disabled, name }) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = () => {
    if (!disabled) {
      setChecked(!checked);
    }
  };

  return (
    <label className={styles.toggle}>
      <input
        type={type === 'checkbox' ? 'checkbox' : 'radio'}
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        className={styles.toggle__input}
      />
      <span
        className={
          type === 'checkbox'
            ? styles.toggle__checkbox
            : styles.toggle__radiobutton
        }
      ></span>
    </label>
  );
};

ToggleInput.propTypes = {
  type: PropTypes.oneOf(['checkbox', 'radiobutton']).isRequired,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
};

export default ToggleInput;
