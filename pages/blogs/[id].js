import React from 'react';
import Image from 'next/image';
import styles from '../../components/Blog/BlogDetails.module.css';
import ReactMarkdown from 'react-markdown';
import Treatment from '../../components/FullTreatments/Treatment';
import ArticlePreview from '../../components/Blog/ArticlePreview';
function BlogDetails({ article }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.header1}>{article.Title}</h1>
      <div className={styles.imageContainer}>
        <Image
          src={article.Photo.url}
          alt="Zdjęcie artykułu"
          layout="responsive"
          width={100}
          height={70}
          className={styles.articleImg}
        />
      </div>
      <ReactMarkdown
        className={styles.content}
        components={{
          img: ({ node, ...props }) => <img className={styles.imageInContent} {...props} />,
        }}
      >
        {article.Content}
      </ReactMarkdown>

      {article.Treatments.length > 0 && (
        <h3 className={styles.header3}>Chcesz wypróbowac zabieg?</h3>
      )}

      {article?.Treatments?.map((item) => (
        <Treatment
          key={item.Name}
          name={item.Name}
          description={item.Description}
          price={item.Price}
          duration={item.Duration}
        />
      ))}

      {article.Treatments.length > 0 && <button className={styles.button}>Umów wizytę »</button>}

      <h3 className={styles.header3}>Inne artykuły</h3>

      <ArticlePreview
        title={article.Title}
        description={article.Content}
        image={article.Photo.url}
        id={article.id}
      />
    </div>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch('https://iva-kosmetologia-strapi.herokuapp.com/articles');
  const articles = await res.json();

  const paths = articles.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths, //indicates that no page needs be created at build time
    fallback: false, //indicates the type of fallback
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://iva-kosmetologia-strapi.herokuapp.com/articles/' + id);
  const data = await res.json();

  return {
    props: { article: data },
  };
};

export default BlogDetails;
