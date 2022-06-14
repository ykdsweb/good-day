import Nav from "../../components/layouts/Nav";
import styles from "../../styles/Header.module.scss";

const title: string = "GOOD-DAY";
const nav_00: string = "Home";
const nav_01: string = "Stylist";
const nav_02: string = "Service";
const nav_03: string = "Recruit";
const nav_04: string = "Company";
const nav_05: string = "Contact";

export default function Header() {
  return (
    <header className={styles.mainHeader}>
      <div className={styles.mainHeaderInner}>
        <div className={styles.hamburgerMenu}>
          <span className={styles.hamburgerMenuLine}></span>
          <span className={styles.hamburgerMenuLineDummy}></span>
        </div>
      </div>
      <Nav />
    </header>
  );
}
