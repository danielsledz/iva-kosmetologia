import React from "react";

import HeaderImg from "../../assets/HeaderImg.png";
import { useRouter } from "next/router";
import TreatmentsSection from "../Treatments/TreatmentsSection";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";

function HomePage() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/cennik");
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
      <TreatmentsSection />
    </>
  );
}

export default HomePage;
