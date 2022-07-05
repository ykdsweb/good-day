import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Layouts/Footer.module.scss";
import ToTopButton from "../home/ToTopButton";
import UnderNotice from "../../components/home/UnderNotice";

export default function Footer() {
  return (
    <footer className={styles.mainFooter}>
      <ToTopButton />
      <UnderNotice />
      <div className={styles.footerContents}>
        <div className={styles.footerBrock}>
          <Link href={"/"}>
            <a>
              <p className={styles.footerTitle}>Home</p>
            </a>
          </Link>
        </div>
        <div className={styles.footerBrock}>
          <Link href={"/stylist"}>
            <a>
              <p className={styles.footerTitle}>Stylist</p>
            </a>
          </Link>
          <ul className={styles.footerUl}>
            <Link href={"/stylist"}>
              <a>
                <li>倉敷中島店</li>
              </a>
            </Link>
          </ul>
        </div>
        <div className={styles.footerBrock}>
          <Link href={"/service"}>
            <a>
              <p className={styles.footerTitle}>Service</p>
            </a>
          </Link>
          <ul className={styles.footerUl}>
            <li>お客様へ</li>
            <li>スタイリスト向け</li>
          </ul>
        </div>
        <div className={styles.footerBrock}>
          <Link href={"/philosophy"}>
            <a>
              <p className={styles.footerTitle}>Philosophy</p>
            </a>
          </Link>
          <ul className={styles.footerUl}>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className={styles.footerBrock}>
          <Link href={"/recruit"}>
            <a>
              <p className={styles.footerTitle}>Recruit</p>
            </a>
          </Link>
          <ul className={styles.footerUl}>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className={styles.footerBrock}>
          <Link href={"/company"}>
            <a>
              <p className={styles.footerTitle}>Company</p>
            </a>
          </Link>
          <ul className={styles.footerUl}>
            <li>新店舗情報</li>
            <li>倉敷中島店</li>
            <li>運営会社</li>
          </ul>
        </div>
      </div>
      <div className={styles.rules}>
        <p className={styles.footerTitle}>Webサイトのご利用について</p>
        <div>
          <ul className={styles.footerContentsEven}>
            <Link href={"/"}>
              <a>
                <li>プライバシーポリシー</li>
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <li>個人情報の取り扱いについて</li>
              </a>
            </Link>
          </ul>
        </div>
      </div>
      <p className={styles.footerCopyLight}>&copy; 2022 OneStep inc.</p>
    </footer>
  );
}
