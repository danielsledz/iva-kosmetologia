import React from 'react'
import Layout from '../../components/Layout/Layout'

import BlogPage from '../../components/Blog/BlogPage'

function Blog({ articles }) {
  return (
    <Layout>
      <BlogPage articles={articles} />
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://iva-kosmetologia-strapi.herokuapp.com/articles')
  const articles = await res.json()

  return {
    revalidate: 10,
    props: {
      articles,
    },
  }
}

export default Blog
