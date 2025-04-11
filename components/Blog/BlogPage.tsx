import React from "react";
import Image from "next/image";
import Stain from "../../assets/BlogStain.svg";
import styles from "./BlogPage.module.css";
import ArticlePreview from "./ArticlePreview";

function BlogPage({ articles }) {
  return (
    <div className={styles.container}>
      <div className={styles.stainContainer}>
        <Image src={Stain} alt="Plama" />
        <div className={styles.stainText}>
          <h1>Blog kosmetologa</h1>
          <p>
            Kosmetolog z zawodu i z pasji. Specjalista kosmetologii estetycznej
            i trychologii. Sprawiam, że możesz znów poczuć się dobrze we własnej
            skórze.
          </p>

          <button className={styles.button}>Czytaj wszystkie</button>
        </div>
      </div>
      <p className={styles.description}>
        Kosmetolog z zawodu i z pasji. Specjalista kosmetologii estetycznej i
        trychologii. Sprawiam, że możesz znów poczuć się dobrze we własnej
        skórze.
      </p>

      <button className={`${styles.button} ${styles.buttonMobile}`}>
        Czytaj wszystkie
      </button>

      <div className={styles.articlesContainer}>
        {articles.map((item) => (
          <ArticlePreview
            key={item._id}
            id={item._id}
            image={item.Photo.asset.url}
            title={item.Title}
            description={item.Content}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
