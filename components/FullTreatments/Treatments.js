import React from 'react';
import Treatment from './Treatment';
import styles from './Treatments.module.css';

const DATA = [
  {
    name: 'Peelingi chemiczne',
    description:
      'tutaj powinien znaleźć się opis zabiegu. Nie musi byc długi ale dobrze wpływa na pozycjonowanie strony w google.',
    price: 'od 90 zł do 200 zł',
    duration: '1 godz. 15 min.',
  },
  {
    name: 'Peelingi chemiczne',
    description:
      'tutaj powinien znaleźć się opis zabiegu. Nie musi byc długi ale dobrze wpływa na pozycjonowanie strony w google.',
    price: 'od 90 zł do 200 zł',
    duration: '1 godz. 15 min.',
  },

  {
    name: 'Peelingi chemiczne',
    description:
      'tutaj powinien znaleźć się opis zabiegu. Nie musi byc długi ale dobrze wpływa na pozycjonowanie strony w google.',
    price: 'od 90 zł do 200 zł',
    duration: '1 godz. 15 min.',
  },

  {
    name: 'Peelingi chemiczne',
    description:
      'tutaj powinien znaleźć się opis zabiegu. Nie musi byc długi ale dobrze wpływa na pozycjonowanie strony w google.',
    price: 'od 90 zł do 200 zł',
    duration: '1 godz. 15 min.',
  },
];

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
