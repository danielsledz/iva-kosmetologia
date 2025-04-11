import React from 'react';
import styles from './AboutMe.module.css';
import AboutMeImg from '../../assets/AboutMe.png';
import Image from 'next/image';
function AboutMe() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>O mnie</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur vehicula
          porttitor. Ut quis mauris ac magna hendrerit facilisis sed non ipsum. Ut fermentum mauris
          erat, at ultricies mauris efficitur sed. Proin ut nisl luctus, sodales neque vitae,
          volutpat lacus.
        </p>
        <p>
          Morbi sit amet auctor metus, sit amet feugiat diam. Aenean dolor ligula, porta et nisi a,
          imperdiet porta justo. Quisque elementum at ipsum sed ornare. Integer porttitor sagittis
          quam. Phasellus maximus dolor maximus commodo porttitor. Nulla at porttitor neque, non
          eleifend risus.
        </p>
      </div>
      <div className={styles.aboutMeImg}>
        <Image placeholder="blur" src={AboutMeImg} alt="Moje zdjęcie" layout="responsive" />
      </div>
    </div>
  );
}

export default AboutMe;
