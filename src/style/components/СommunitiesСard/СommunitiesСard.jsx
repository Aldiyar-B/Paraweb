import PropTypes from 'prop-types';
import React from 'react';
import Button from '../../../components/Button/Button';
import Tag from '../../../components/Tag/Tag';
import styles from './СommunitiesСard.module.scss';

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

export const CommunitiesCard = ({
  title,
  category,
  imageUrl,
  avatar,
  name,
  role,
}) => {
  return (
    <div className={styles['event-card']}>
      {/* Верхняя часть */}
      <div className={styles['event-card__header']}>
        <Button
          className={styles['event-card__bookmark']}
          iconLeft="bookmark"
          showIconLeft={true}
          name="bookmark"
        />
      </div>

      {/* Контент */}
      <div className={styles['event-card__content']}>
        <div className={styles['event-card__info']}>
          <div className={styles['event-card__info-left']}>
            <Tag label="Творчество" color="red" />
          </div>
        </div>
        <h3 className={styles['event-card__title']}>{title}</h3>

        {/* Блок с аватаром и именем */}
        <div className={styles['community-card__user']}>
          <img
            src={avatar}
            alt={name}
            className={styles['community-card__avatar']}
          />
          <div>
            <p className={styles['community-card__name']}>{name}</p>
            <p className={styles['community-card__role']}>{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Пропсы для проверки типов
CommunitiesCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default CommunitiesCard;
