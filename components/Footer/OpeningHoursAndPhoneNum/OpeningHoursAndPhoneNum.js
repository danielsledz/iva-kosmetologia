import React from 'react';
import styles from './OpeningHoursAndPhoneNum.module.css';

function OpeningHoursAndPhoneNum() {
  return (
    <div className={styles.container}>
      <h3>Zadzwoń do nas</h3>
      <p className={styles.paragraph}>
        Jeśli chcesz umówić się na wizytę, może również zadzonić. Nasz numer telefonu to{' '}
        <span className={styles.boldText}>+48 508 514 461</span>
      </p>
      <h3>Godziny otwarcia</h3>
      <table className="table">
        <tbody>
          <tr>
            <td>Poniedziałek</td>
            <td>10:00 - 17:00</td>
          </tr>
          <tr>
            <td>Wtorek</td>
            <td>10:00 - 17:00</td>
          </tr>
          <tr>
            <td>Środa</td>
            <td>10:00 - 17:00</td>
          </tr>
          <tr>
            <td>Czwartek</td>
            <td>10:00 - 17:00</td>
          </tr>
          <tr>
            <td>Piątek</td>
            <td>10:00 - 17:00</td>
          </tr>
          <tr>
            <td>Sobota</td>
            <td>12:00 - 15:00</td>
          </tr>
          <tr>
            <td>Niedziela</td>
            <td>Nieczynne</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OpeningHoursAndPhoneNum;
