import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.footerLogo}>
        <div className={styles.footerLogoImg}>
          <Link href={"/"}>
            <a>
              <Image
                className=""
                src={"/media/GOOD-DAY_mainLogo_05.png"}
                objectFit="contain"
                alt="GOOD-DAY_MainLogo"
                width={64}
                height={64}
              />
            </a>
          </Link>
        </div>
        <div className={styles.footerLogoImg}>
          <Link href={"/"}>
            <a>
              <Image
                className=""
                src={"/media/OneStep_logo_00.png"}
                objectFit="contain"
                alt="OneStep_MainLogo"
                width={64}
                height={64}
              />
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.footerInfoArea}>
        <Link href={"/"}>
          <a>
            <p className={styles.footerInfo}>Privacy Policy</p>
          </a>
        </Link>
        <Link href={"/"}>
          <a>
            <p className={styles.footerInfo}>Company Profile</p>
          </a>
        </Link>
      </div>
      <p className={styles.footerCopyLight}>&copy; 2022 OneStep inc.</p>
    </footer>
  );
}
