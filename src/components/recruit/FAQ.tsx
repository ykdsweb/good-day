import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Recruit/FAQ.module.scss";

export default function FAQ() {
  return (
    <>
      <div className={styles.accordionArea}>
        <h2 className={styles.accordionTitle}>テスト</h2>
        <input
          id="accordionCheck0"
          className={styles.accordionCheck}
          type="checkbox"
        ></input>
        <label className={styles.accordionLabel} htmlFor="accordionCheck0">
          クリックで開く
        </label>
        <div className={styles.accordionContent}>
          <p>hello.world!</p>
        </div>
        <input
          id="accordionCheck1"
          className={styles.accordionCheck}
          type="checkbox"
        ></input>
        <label className={styles.accordionLabel} htmlFor="accordionCheck1">
          クリックで開くその1
        </label>
        <div className={styles.accordionContent}>
          <p>hello.world1!</p>
        </div>
        <input
          id="accordionCheck2"
          className={styles.accordionCheck}
          type="checkbox"
        ></input>
        <label className={styles.accordionLabel} htmlFor="accordionCheck2">
          クリックで開くその2
        </label>
        <div className={styles.accordionContent}>
          <p>hello.world2!</p>
        </div>
        <input
          id="accordionCheck3"
          className={styles.accordionCheck}
          type="checkbox"
        ></input>
        <label className={styles.accordionLabel} htmlFor="accordionCheck3">
          クリックで開くその3
        </label>
        <div className={styles.accordionContent}>
          <p>hello.world3!</p>
        </div>
      </div>
    </>
  );
}
