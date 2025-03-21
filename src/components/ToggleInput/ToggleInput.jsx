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
      />
      <span
        className={type === 'checkbox' ? styles.checkbox : styles.radiobutton}
      ></span>
    </label>
  );
};

ToggleInput.propTypes = {
  type: PropTypes.oneOf(['checkbox', 'radiobutton']).isRequired,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string, // Только для радиокнопки
};

export default ToggleInput;
