import React from 'react';
import Header from '../components/Header/Header';
import HeaderImg from '../assets/HeaderImg2.png';
import Treatments from '../components/FullTreatments/Treatments';
import Layout from '../components/Layout/Layout';

function Cennik({ treatments }) {
  return (
    <Layout>
      <Header
        imgSrc={HeaderImg}
        title="Poznaj
        nasze zabiegi"
        btnTitle="zobacz »"
        btnClickRoute="/cennik"
      />

      <Treatments treatments={treatments} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://iva-kosmetologia-strapi.herokuapp.com/treatments');
  const treatments = await res.json();

  return {
    props: {
      treatments,
    },
  };
}

export default Cennik;
