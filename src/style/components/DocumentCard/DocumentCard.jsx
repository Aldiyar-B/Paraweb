import React from 'react';
import PropTypes from 'prop-types';
import styles from './DocumentCard.module.scss';
import { icons } from '../../../components/icons';
const getIcon = (iconName) => {
  return (
    icons[`../assets/svg/icons/${iconName}.svg`] || '<!-- Icon not found -->'
  );
};

const DocumentCard = ({ title, fileSize, fileType }) => {
  return (
    <div className={styles['document-card']}>
      <div className={styles['document-card__content']}>
        <h3 className={styles['document-card__title']}>{title}</h3>
        <div className={styles['document-card__footer']}>
          <span
            className={styles['document-card__icon']}
            dangerouslySetInnerHTML={{ __html: getIcon('download') }}
          />
          <span className={styles['document-card__info']}>
            {fileType}, {fileSize}
          </span>
        </div>
      </div>
    </div>
  );
};

DocumentCard.propTypes = {
  title: PropTypes.string.isRequired,
  fileSize: PropTypes.string.isRequired,
  fileType: PropTypes.string.isRequired,
};

export default DocumentCard;
