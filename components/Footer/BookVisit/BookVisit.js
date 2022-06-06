import React, { useState } from 'react';
import styles from './BookVisit.module.css';

function BookVisit() {
  const [name, setName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [message, setMessage] = useState('');

  const handleOnChangeName = (e) => {
    setName(e.target.value);
  };

  const handleOnChangePhoneNum = (e) => {
    setPhoneNum(e.target.value);
  };

  const handleOnChangeMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmit = (e) => {
    if (name.length <= 0 || phoneNum.length <= 0 || message.length <= 0) {
      alert('Uzupełnij wszystkie pola formularza!');
      e.preventDefault();
    } else {
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phoneNum,
          message,
        }),
      })
        .then((res) => {
          console.log('Response received');

          if (res.status === 200) {
            console.log('Response succeeded!');
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className={styles.container}>
      <h3>Zarezerwuj wizytę</h3>
      <p className={styles.paragraph}>
        Jeśli jesteś zainteresowana/y umówieniem się na wizytę, napisz do nas lub zadzwoń.
      </p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Imię i nazwisko*</label>
        <input
          value={name}
          onChange={handleOnChangeName}
          className={styles.input}
          type="text"
          name="name"
        />

        <label htmlFor="tel">Numer telefonu lub adres email*</label>
        <input
          value={phoneNum}
          onChange={handleOnChangePhoneNum}
          className={styles.input}
          name="tel"
        />

        <label htmlFor="additionalMessage">Dodatkowa wiadomość*</label>
        <textarea
          value={message}
          onChange={handleOnChangeMessage}
          className={styles.textarea}
          name="additionalMessage"
        />

        <button className={styles.button} type="submit">
          Prześlij
        </button>
      </form>
    </div>
  );
}

export default BookVisit;
