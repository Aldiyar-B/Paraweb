import React from 'react';
import PropTypes from 'prop-types';
import styles from './PartnerCard.module.scss';
import ImagePlaceholder from '../../../components/ImagePlaceholder/ImagePlaceholder';
import Button from '../../../components/Button/Button';

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

const PartnerCard = ({ name, link, contactName, phone, email }) => {
  return (
    <div className={styles['partner-card']}>
      <div className={styles['partner-card__header']}>
        <div className={styles['partner-card__image']}>
          <ImagePlaceholder
            className={styles['partner-card__img']}
            src="./src/assets/images/logo.png"
          />
        </div>
        <h3
          className={styles['partner-card__title']}
          onClick={() => window.open(link, '_blank')}
        >
          {name}
        </h3>
        <span className={styles['partner-card__link']}>{link}</span>
      </div>

      <div className={styles['partner-card__content']}>
        <div className={styles['partner-card__row']}>
          <span className={styles['partner-card__label']}>Контактное лицо</span>
          <p className={styles['partner-card__value']}>{contactName}</p>
        </div>

        <div className={styles['partner-card__row']}>
          <span className={styles['partner-card__label']}>Телефон</span>
          <a
            href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
            className={styles['partner-card__value']}
          >
            {phone}
          </a>
        </div>

        <div className={styles['partner-card__row']}>
          <span className={styles['partner-card__label']}>
            Электронная почта
          </span>
          <a href={`mailto:${email}`} className={styles['partner-card__value']}>
            {email}
          </a>
        </div>
      </div>

      <div className={styles['partner-card__footer']}>
        <div className={styles['partner-card__socials']}>
          <Button
            iconLeft="social-vk"
            showIconLeft="true"
            name="icon-fill"
            className={styles['partner-card__social']}
          />
          <Button
            iconLeft="social-tg"
            showIconLeft="true"
            name="icon-fill"
            className={styles['partner-card__social']}
          />
        </div>
      </div>
    </div>
  );
};

PartnerCard.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  contactName: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default PartnerCard;
