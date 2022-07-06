import Link from "next/link";
import styles from "../../styles/Service/Service.module.scss";

const Customer: React.FC = () => {
  return (
    <>
      <div className={styles.main}>
        <h2 className={styles.featuresMainTitle}>タイトル(お客さんへ)</h2>
        <p className={styles.featuresMainSubTitle}>サブタイトル(お客様へ)</p>
        <div className={styles.returnToTop}>
          <Link
            href={"https://sam004.salonanswer.com/sas/reserve/goodday/staff"}
            passHref
          >
            <a>
              <h2 className="">Web予約はこちら</h2>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Customer;
