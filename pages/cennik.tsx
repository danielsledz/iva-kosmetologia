import React from "react";
import HeaderImg from "../assets/HeaderImg2.png";
import Layout from "../components/Layout/Layout";
import { useRef } from "react";
import Treatments from "../components/Treatments/Treatments";
import Header from "../components/Header/Header";
import { client } from "../sanity";

function Cennik({ treatments }) {
  const ref = useRef<HTMLDivElement>(null);
  const executeScroll = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout>
      <Header
        imgSrc={HeaderImg}
        title="Poznaj nasze zabiegi"
        btnTitle="zobacz »"
        btnClick={executeScroll}
      />
      <div ref={ref}>
        <Treatments treatments={treatments} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // Pobieranie danych z Sanity
  const query = `*[_type == "pricing"]{
    Heading,
    Description,
    Price,
    Duration
  }`;

  const treatments = await client.fetch(query); // Wykonanie zapytania

  return {
    props: {
      treatments, // Zwrócenie pobranych danych jako props
    },
  };
}

export default Cennik;
