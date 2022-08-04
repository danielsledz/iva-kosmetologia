import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Header from '../Header/Header';
import TreatmentsList from '../Treatments/TreatmentsSection';
import HeaderImg from '../../assets/HeaderImg.png';
import { useRouter } from 'next/router';

function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/cennik');
  };
  return (
    <>
      <Header
        imgSrc={HeaderImg}
        title="Gabinet kosmetologiczny"
        btnTitle="sprawdź cennik »"
        btnClick={handleClick}
      />
      <AboutMe />
      <TreatmentsList />
    </>
  );
}

export default Home;
