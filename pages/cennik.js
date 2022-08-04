import React from 'react'
import Header from '../components/Header/Header'
import HeaderImg from '../assets/HeaderImg2.png'
import Treatments from '../components/Treatments/Treatments'
import Layout from '../components/Layout/Layout'
import { useRef } from 'react'

function Cennik({ treatments }) {
  const ref = useRef(null)
  const executeScroll = () => ref.current.scrollIntoView({ behavior: 'smooth' })

  return (
    <Layout>
      <Header
        imgSrc={HeaderImg}
        title="Poznaj
        nasze zabiegi"
        btnTitle="zobacz »"
        btnClick={executeScroll}
      />
      <div ref={ref}>
        <Treatments treatments={treatments} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://iva-kosmetologia-strapi.herokuapp.com/treatments')
  const treatments = await res.json()

  return {
    revalidate: 10,
    props: {
      treatments,
    },
  }
}

export default Cennik
