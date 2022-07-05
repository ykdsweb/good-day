import Link from "next/link";
import styles from "../../styles/Service/Service.module.scss";

const ToStylist: React.FC = () => {
  return (
    <>
      <div className={styles.main}>
        <h2 className={styles.featuresMainTitle}>タイトル(スタイリスト)</h2>
        <p className={styles.featuresMainSubTitle}>
          サブタイトル(スタイリスト)
        </p>

        <div className={styles.returnToTop}>
          <Link href={"/recruit"} passHref>
            <a>
              <h2 className="">募集条件を見る</h2>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ToStylist;
