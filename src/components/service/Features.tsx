import Link from "next/link";
import styles from "../../styles/Service.module.scss";

const Features: React.FC = () => {

  return (
    <>
      <div className={styles.features}>
        <>
          <h2 className={styles.featuresTitle}>title</h2>
          <div className={styles.featuresSubTitle}>subtitle</div>
          <div className={styles.featuresDescription}>description</div>
        </>
        <>
          <h2 className={styles.featuresTitle}>title</h2>
          <div className={styles.featuresSubTitle}>subtitle</div>
          <div className={styles.featuresDescription}>description</div>
        </>
        <>
          <h2 className={styles.featuresTitle}>title</h2>
          <div className={styles.featuresSubTitle}>subtitle</div>
          <div className={styles.featuresDescription}>description</div>
        </>
        <div className={styles.returnToTop}>
          <Link href={"/"}>
            <a>
              <h2 className="">Topに戻る</h2>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Features;
