// Overviewは、CustomerとToStylistの2つをサービスに渡す
import Link from "next/link";
import Customer from "../../components/service/Customer";
import ToStylist from "../../components/service/ToStylist";
import styles from "../../styles/Service/Service.module.scss";

const Overview: React.FC = () => {
  return (
    <>
      <div className={styles.main}>
        <h2 className={styles.featuresMainTitle}>ページタイトル</h2>
        <p className={styles.featuresMainSubTitle}>
          ページサブタイトル
        </p>
        <>
        <Customer />
        <ToStylist />
        </>
        <div className={styles.returnToTop}>
          <Link href={"/"} passHref>
            <a>
              <h2 className="">Topに戻る</h2>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Overview;
