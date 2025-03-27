import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductCard.module.scss';

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

const ProductCard = ({
  image,
  title,
  time,
  description,
  buttonText = 'Получить',
  isIcon = false,
  icon,
  onButtonClick,
}) => {
  return (
    <div className={`${styles['product-card']} `}>
      {image && (
        <div className={styles['product-card__image']}>
          <img
            src={image}
            alt={title}
            className={styles['product-card__img']}
          />
        </div>
      )}

      <div className={styles['product-card__content']}>
        <div className={styles['product-card__description-wrapper']}>
          {isIcon && icon && (
            <span
              className={styles['product-card__icon']}
              dangerouslySetInnerHTML={{ __html: getIcon(icon) }}
            />
          )}
          <p className={styles['product-card__description']}>{description}</p>
        </div>

        <div className={styles['product-card__header']}>
          <h3 className={styles['product-card__title']}>{title}</h3>
        </div>

        <button className={styles['product-card__button']}>{buttonText}</button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  time: PropTypes.string,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  isIcon: PropTypes.bool,
  icon: PropTypes.string,
  onButtonClick: PropTypes.func,
};

ProductCard.defaultProps = {
  image: '',
  time: '',
  buttonText: 'Получить',
  isIcon: false,
  icon: '',
  onButtonClick: () => {},
};

export default ProductCard;
