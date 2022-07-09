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
          <Link href={"/"} passHref>
            <a>
              <p className={styles.footerTitle}>Home</p>
            </a>
          </Link>
        </div>
        <div className={styles.footerBrock}>
          <Link href={"/stylist"} passHref>
            <a>
              <p className={styles.footerTitle}>Stylist</p>
            </a>
          </Link>
          <ul className={styles.footerUl}>
            <Link href={"/stylist"} passHref>
              <a>
                <li>倉敷中島店</li>
              </a>
            </Link>
          </ul>
        </div>
        <div className={styles.footerBrock}>
          <Link href={"/service"} passHref>
            <a>
              <p className={styles.footerTitle}>Service</p>
            </a>
          </Link>
          <ul className={styles.footerUl}>
            <Link href={"/service/#Customer"} passHref>
              <a>
                <li>お客様へ</li>
              </a>
            </Link>
            <Link href={"/service/#ToStylist"} passHref>
              <a>
                <li>スタイリスト向け</li>
              </a>
            </Link>
          </ul>
        </div>
        <div className={styles.footerBrock}>
          <Link href={"/philosophy"} passHref>
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
          <Link href={"/recruit"} passHref>
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
          <Link href={"/company"} passHref>
            <a>
              <p className={styles.footerTitle}>Company</p>
            </a>
          </Link>
          <ul className={styles.footerUl}>
            <Link href={"/company/#NewShop"} passHref>
              <a>
                <li>新店舗情報</li>
              </a>
            </Link>
            <Link href={"/company/#Nakashima"} passHref>
              <a>
                <li>倉敷中島店</li>
              </a>
            </Link>
            <Link href={"/company/#Corporation"} passHref>
              <a>
                <li>運営会社</li>
              </a>
            </Link>
          </ul>
        </div>
      </div>
      <div className={styles.rules}>
        <p className={styles.footerTitle}>Webサイトのご利用について</p>
        <div>
          <ul className={styles.footerContentsEven}>
            <Link href={"/"} passHref>
              <a>
                <li>プライバシーポリシー</li>
              </a>
            </Link>
            <Link href={"/"} passHref>
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
