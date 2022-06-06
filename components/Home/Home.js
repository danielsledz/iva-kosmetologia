import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Header from '../Header/Header';
import Treatments from '../Treatments/Treatments';
import HeaderImg from '../../assets/HeaderImg.png';

function Home() {
  return (
    <>
      <Header
        imgSrc={HeaderImg}
        title="Gabinet kosmetologiczny"
        btnTitle="sprawdź cennik »"
        btnClickRoute="/cennik"
      />
      <AboutMe />
      <Treatments />
    </>
  );
}

export default Home;
