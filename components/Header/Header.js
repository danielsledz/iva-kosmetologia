import React from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

function Header({ imgSrc, title, children, btnTitle, btnClick }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerImg}>
        <Image src={imgSrc} layout="responsive" placeholder="blur" />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.header1}>{title}</h1>
        <p className={styles.paragraph}>
          Kosmetolog z zawodu i z pasji. <br /> Specjalista kosmetologii estetycznej i trychologii.
          Sprawiam, że możesz znów <span>poczuć się dobrze we własnej skórze.</span>
        </p>

        <button onClick={btnClick} className={styles.button}>
          {btnTitle}
        </button>
      </div>
    </header>
  );
}

export default Header;
