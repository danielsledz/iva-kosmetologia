import { useRouter } from 'next/router';
import styles from './BlogPage.module.css';
import Image from 'next/image';

const ArticlePreview = ({ title, description, image, id }) => {
  const router = useRouter();
  return (
    <div className={styles.articleContainer}>
      <div className={styles.articleImageContainer}>
        <Image src={image} alt="Zdjęcie artykułu" layout="responsive" width={100} height={70} />
      </div>

      <div className={styles.articleTextContent}>
        <h3>{title}</h3>

        <div className={styles.articleUnderline}></div>

        <p>{description.slice(0, 240)}</p>

        <button
          onClick={() => {
            router.push('/blogs/' + id);
          }}
          className={`${styles.button} ${styles.buttonArticle}`}
        >
          Czytaj całość »
        </button>
      </div>
    </div>
  );
};

export default ArticlePreview;
