import React from "react";
import Layout from "../../components/Layout/Layout";
import BlogPage from "../../components/Blog/BlogPage";
import { client } from "../../sanity";

function Blog({ articles }) {
  return (
    <Layout>
      <BlogPage articles={articles} />
    </Layout>
  );
}

export async function getStaticProps() {
  const query = `*[_type == "article"]{
    _id,
    Title,
    Content,
    Photo{
      asset->{
        _id,
        url
      }
    },
    PublishedDate,
    Author
  }`;

  const articles = await client.fetch(query); // Wykonanie zapytania

  return {
    props: {
      articles,
    },
  };
}

export default Blog;
