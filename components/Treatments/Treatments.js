import React from 'react';
import Treatment from './TreatmentPreview';
import styles from './Treatments.module.css';

function Treatments({ treatments }) {
  return (
    <div className={styles.container}>
      <h3>Nasze zabiegi</h3>

      {treatments.map((item) => (
        <Treatment
          key={item.Name}
          name={item.Name}
          description={item.Description}
          price={item.Price}
          duration={item.Duration}
        />
      ))}
    </div>
  );
}

export default Treatments;
