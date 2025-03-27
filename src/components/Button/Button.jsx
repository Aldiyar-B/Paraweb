import React from 'react';
import styles from './Button.module.scss';
import { icons } from '../icons';

const Button = ({
  text,
  name = 'primary',
  size = 'medium',
  showIconLeft = false,
  showIconRight = false,
  iconLeft = 'user',
  iconRight = '',
  bg = 'primary',
  onClick,
  disabled = false,
}) => {
  // Получаем содержимое SVG как строку
  const getIcon = (iconName) =>
    icons[`../assets/svg/icons/${iconName}.svg`] || null;

  return (
    <button
      className={`${styles.button} 
              ${name === 'user' ? styles.userWrapper : ''} 
              ${name === 'share' ? styles.shareWrapper : ''} 
              ${styles[name]} 
              ${styles[size]}
              ${styles[bg]} 
              ${disabled ? styles.disabled : ''}`}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      {name === 'user' || name === 'share' ? (
        // Специфичная структура для user и share
        <>
          {getIcon(iconLeft) && (
            <span
              className={styles.icon}
              dangerouslySetInnerHTML={{ __html: getIcon(iconLeft) }}
            />
          )}
          {name === 'share' && <span>{text}</span>}
        </>
      ) : (
        // Стандартная структура для остальных кнопок
        <>
          {showIconLeft && getIcon(iconLeft) && (
            <span
              className={styles.icon}
              dangerouslySetInnerHTML={{ __html: getIcon(iconLeft) }}
            />
          )}
          <span>{text}</span>
          {showIconRight && getIcon(iconRight) && (
            <span
              className={styles.icon}
              dangerouslySetInnerHTML={{ __html: getIcon(iconRight) }}
            />
          )}
        </>
      )}
    </button>
  );
};

export default Button;
