import React from 'react';
import styles from './Button.module.scss';

// Загружаем все SVG-иконки в объект (автоматическая подгрузка)
const icons = import.meta.glob('../../assets/svg/icons/*.svg', {
  eager: true,
  as: 'raw',
});

const Button = ({
  text,
  state = 'default',
  name = 'primary',
  size = 'medium',
  showIconLeft = false,
  showIconRight = false,
  iconLeft = 'pencil',
  iconRight = 'plus',
  onClick,
  disabled = false,
}) => {
  // Получаем содержимое SVG как строку (инлайн-код)
  const getIcon = (iconName) =>
    icons[`../../assets/svg/icons/${iconName}.svg`] || null;

  return (
    <button
      className={`${styles.button} ${styles[name]} ${styles[size]} ${styles[state]} ${disabled ? styles.disabled : ''}`}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      {name === 'user' ? (
        // Специфичная структура для кнопки с name="user"
        <>
          <span className={styles.userIcon}>
            {getIcon(iconLeft) && (
              <span
                className={styles.icon}
                dangerouslySetInnerHTML={{ __html: getIcon(iconLeft) }}
              />
            )}
          </span>
          <span className={styles.userText}>{text}</span>
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
