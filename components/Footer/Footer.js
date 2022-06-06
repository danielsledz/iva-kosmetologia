import React from 'react';
import Image from 'next/image';
import LogoSVG from '../../assets/logo.svg';
import styles from './Footer.module.css';
import BookVisit from './BookVisit/BookVisit';
import OpeningHoursAndPhoneNum from './OpeningHoursAndPhoneNum/OpeningHoursAndPhoneNum';
import VisitUs from './VisitUs/VisitUs';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <div className={styles.container}>
        <BookVisit />

        <OpeningHoursAndPhoneNum />

        <VisitUs />
      </div>

      <footer className={styles.footer}>
        <div className={styles.logoContainer}>
          <Image src={LogoSVG} alt="Logo" layout="responsive" />
        </div>

        <div className={styles.iconContainer}>
          <a
            href="https://www.facebook.com/IVA-kosmetologia-110403063893167/"
            target="_blank"
            className={styles.icon}
          >
            <FaFacebookF size={25} color="white" />
          </a>

          <a
            href="https://www.instagram.com/ivakosmetologia/"
            target="_blank"
            className={styles.icon}
          >
            <FaInstagram size={25} color="white" />
          </a>
        </div>

        <p className={styles.title}>
          © <span className={styles.textBold}>IVA Kosmetologia 2022</span>
        </p>

        <div className={styles.authors}>
          <p>
            design: <span className={styles.textBold}>drawninstarts.art</span>
          </p>

          <p>
            wykonanie: <span className={styles.textBold}>Daniel Śledź</span>
          </p>
        </div>
      </footer>

      <div style={{ height: 70, backgroundColor: '#273650' }} />
    </>
  );
}

export default Footer;
