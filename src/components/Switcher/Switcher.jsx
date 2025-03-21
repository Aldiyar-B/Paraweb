import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Switcher.module.scss';
import { icons } from './icons';

const getIcon = (iconName) =>
  icons[`../../assets/svg/icons/${iconName}.svg`] || null;

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
    <label className={`${styles.switcher} ${disabled ? styles.disabled : ''}`}>
      <input
        type="checkbox"
        checked={isChecked}
        disabled={disabled}
        onChange={handleToggle}
      />

      {/* Внешний контейнер */}
      <span className={styles.slider}>
        {/* Левая иконка (всегда видима) */}
        <span
          className={styles.icon}
          dangerouslySetInnerHTML={{ __html: getIcon(leftIcon) }}
        />

        {/* Подвижный индикатор (с белой иконкой) */}
        <span className={styles.indicator}>
          <span className={styles.icon} />
        </span>

        {/* Правая иконка (всегда видима) */}
        <span
          className={styles.icon}
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
