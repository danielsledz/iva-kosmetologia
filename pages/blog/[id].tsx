import React from "react";
import Image from "next/image";
import styles from "../../components/Blog/BlogDetails.module.css";
import ReactMarkdown from "react-markdown";
import Treatment from "../../components/Treatments/TreatmentPreview";
import ArticlePreview from "../../components/Blog/ArticlePreview";
import { useRef } from "react";
import { client } from "../../sanity";

function BlogDetails({ article }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className={styles.container}>
      <h1 className={styles.header1}>{article.Title}</h1>
      <div className={styles.imageContainer}>
        <Image
          src={article.Photo.asset.url}
          alt="Zdjęcie artykułu"
          layout="responsive"
          width={100}
          height={70}
          className={styles.articleImg}
        />
      </div>
      <div className={styles.content}>
        <ReactMarkdown>{article.Content}</ReactMarkdown>
      </div>

      {article.Pricing?.length > 0 && (
        <h3 className={styles.header3}>Zabiegi o których mowa:</h3>
      )}

      <div className={styles.Treatmentslist}>
        {article?.Pricing?.map((item) => (
          <Treatment
            key={item.Name}
            name={item.Name}
            description={item.Description}
            price={item.Price}
            duration={item.Duration}
          />
        ))}
      </div>

      {article?.OtherArticles?.length > 0 && (
        <h3 className={styles.header3}>Inne artykuły</h3>
      )}

      {article.OtherArticles?.map((item) => (
        <ArticlePreview
          key={item._id}
          title={item.Title}
          description={item.Content}
          image={item.Photo.asset.url}
          id={item._id}
        />
      ))}
    </div>
  );
}

export const getStaticPaths = async () => {
  // Pobierz wszystkie artykuły z Sanity
  const query = `*[_type == "article"]{ _id }`; // Pobierz ID artykułów
  const articles = await client.fetch(query);

  const paths = articles.map((item) => {
    return {
      params: { id: item._id }, // ID artykułów z Sanity
    };
  });

  return {
    paths,
    fallback: false, // Strona nie będzie wyświetlana w trybie fallback
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const query = `*[_type == "article" && _id == $id]{
    _id,
    Title,
    Content,
    Photo{
      asset->{
        _id,
        url
      }
    },
    Pricing[] {
      Name,
      Description,
      Price,
      Duration
    },
    "OtherArticles": *[_type == "article" && _id != $id]{
      _id,
      Title,
      Content,
      Photo{
        asset->{
          _id,
          url
        }
      }
    }
  }`;

  const params = { id };
  const article = await client.fetch(query, params);

  return {
    props: {
      article: article[0],
    },
  };
};

export default BlogDetails;
