import React from 'react';
import styles from './Treatments.module.css';

const Treatment = ({ name, description, price, duration }) => {
  return (
    <div className={styles.treatmentContainer}>
      <div className={styles.titleAndDescriptionContainer}>
        <h5>{name}</h5>
        <p>{description}</p>
      </div>

      <div className={styles.priceAndDurationContainer}>
        <p className={styles.price}>{price}</p>
        <p>{duration}</p>
      </div>
    </div>
  );
};

export default Treatment;
