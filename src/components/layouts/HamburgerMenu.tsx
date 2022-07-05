import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../../styles/Layouts/HamburgerMenu.module.scss";

export default function HamburgerMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <header id="header" className={styles.header}>
        <div className={styles.logo}>
          <Link href={"/"} passHref>
            <a>
              <Image
                className={styles.navImage}
                src={"/media/GOOD-DAY_mainLogo_05.png"}
                objectFit="contain"
                alt="GOOD-DAY_MainLogo"
                width={64}
                height={64}
              />
            </a>
          </Link>
        </div>
        <nav className={styles.navPC}>
          <ul>
            <li>
              <Link href="/" passHref>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/stylist" passHref>
                <a>Stylist</a>
              </Link>
            </li>
            <li>
              <Link href="/service" passHref>
                <a>Service</a>
              </Link>
            </li>
            <li>
              <Link href="/philosophy" passHref>
                <a>Philosophy</a>
              </Link>
            </li>
            <li>
              <Link href="/recruit" passHref>
                <a>Recruit</a>
              </Link>
            </li>
            <li>
              <Link href="/company" passHref>
                <a>Company</a>
              </Link>
            </li>
            <li>
              <Link href="https://sam004.salonanswer.com/sas/reserve/goodday/staff" passHref>
                <a>Reservation</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.container}>
          <div className={styles.humburger} onClick={() => menuFunction()}>
            <span className={openMenu ? styles.open : undefined}></span>
            <span className={openMenu ? styles.open : undefined}></span>
            <p className={openMenu ? styles.open : undefined}>Menu</p>
          </div>
        </div>
      </header>
      <div
        className={`${styles.drawerMenu}
        ${openMenu ? styles.open : undefined}`}
      >
        <ul>
          <div className={styles.close} onClick={() => menuFunction()}>
            <span></span>
            <span></span>
            <p>Close</p>
          </div>
          <li>
            <Link href="/" passHref>
              <a>
                <p className={styles.mainTitle}>Home</p>
                <p className={styles.subTitle}>ホーム</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/stylist" passHref>
              <a>
                <p className={styles.mainTitle}>Stylist</p>
                <p className={styles.subTitle}>スタイリスト</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/service" passHref>
              <a>
                <p className={styles.mainTitle}>Service</p>
                <p className={styles.subTitle}>サービス</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/philosophy" passHref>
              <a>
                <p className={styles.mainTitle}>philosophy</p>
                <p className={styles.subTitle}>理念</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/recruit" passHref>
              <a>
                <p className={styles.mainTitle}>Recruit</p>
                <p className={styles.subTitle}>リクルート</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/company" passHref>
              <a>
                <p className={styles.mainTitle}>Company</p>
                <p className={styles.subTitle}>運営会社</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://sam004.salonanswer.com/sas/reserve/goodday/staff" passHref>
              <a>
                <p className={styles.mainTitle}>Reservation</p>
                <p className={styles.subTitle}>予約する</p>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
