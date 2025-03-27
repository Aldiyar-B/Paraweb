import PropTypes from 'prop-types';
import React from 'react';
import Button from '../../../components/Button/Button';
import Tag from '../../../components/Tag/Tag';
import styles from './EventCard.module.scss';

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

export const EventCard = ({
  date,
  month,
  title,
  time,
  days,
  location,
  attendees,
  rating,
}) => {
  return (
    <div className={styles['event-card']}>
      {/* Верхняя часть */}
      <div className={styles['event-card__header']}>
        <div className={styles['event-card__date']}>
          <div className={styles['event-card__date-number']}>{date}</div>
          <div className={styles['event-card__date-month']}>{month}</div>
        </div>
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
            <div className={styles['event-card__rating']}>
              <span className={styles['event-card__rating-value']}>
                {rating}
              </span>
            </div>
          </div>
          <div className={styles['event-card__info-right']}>
            <span className={styles['event-card__rating-days']}>
              Через {days} дней
            </span>
          </div>
        </div>
        <h3 className={styles['event-card__title']}>{title}</h3>

        {/* Детали события */}
        <div className={styles['event-card__details']}>
          {[
            { icon: 'clock', text: time },
            { icon: 'map-pin', text: location },
            { icon: 'users-group', text: `${attendees} человек` },
          ].map(({ icon, text }) => (
            <div key={icon} className={styles['event-card__detail']}>
              <span
                className={styles['event-card__icon']}
                dangerouslySetInnerHTML={{ __html: getIcon(icon) }}
              />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Пропсы для проверки типов
EventCard.propTypes = {
  date: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  attendees: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default EventCard;
