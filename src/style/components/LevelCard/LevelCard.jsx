import React from 'react';
import PropTypes from 'prop-types';
import styles from './LevelCard.module.scss';

const icons = import.meta.glob('../../../assets/svg/icons/*.svg', {
  eager: true,
  as: 'raw',
});
{
  /* */
}
const getIcon = (iconName) => {
  return (
    icons[`../../../assets/svg/icons/${iconName}.svg`] ||
    '<!-- Icon not found -->'
  );
};
const LevelCard = ({ image, title, description, isIcon, icon, disabled }) => {
  console.log(icon);
  return (
    <div
      className={`${styles['level-card']} ${disabled ? styles['level-card--disabled'] : ''}`}
    >
      {image && (
        <div className={styles['level-card__image']}>
          <img src={image} alt={title} className={styles['level-card__img']} />
        </div>
      )}
      <div className={styles['level-card__content']}>
        <div className={styles['level-card__title-container']}>
          <h3 className={styles['level-card__title']}>{title}</h3>
        </div>
        <div className={styles['level-card__description-container']}>
          {isIcon && (
            <span
              className={styles['level-card__icon']}
              dangerouslySetInnerHTML={{ __html: getIcon(icon) }}
            />
          )}
          <p className={styles['level-card__description']}>{description}</p>
        </div>
      </div>
    </div>
  );
};

LevelCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isIcon: PropTypes.bool,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
};

LevelCard.defaultProps = {
  image: '',
  isIcon: false,
  disabled: false,
};

export default LevelCard;
