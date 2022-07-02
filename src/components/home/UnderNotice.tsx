import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Layouts/UnderNotice.module.scss";

export default function UnderNotice() {
  return (
    <>
      <div className={styles.underNotice}>
        <Link href={"https://sam004.salonanswer.com/sas/reserve/goodday/staff"}>
          <a>
            <button className={styles.underNoticeButton}>
              Web予約はこちら
            </button>
          </a>
        </Link>
      </div>
    </>
  );
}
