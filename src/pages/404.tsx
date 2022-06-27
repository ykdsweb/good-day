import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Detail.module.scss";

export default function Custom404() {
  return (
    <>
    <main className={styles.detailArea}>
      <div className={styles.detail404Text}>
        <div>
          <h2 className={styles.detailSubTitle}>ページが見つかりません</h2>
        </div>
        <div>
          <p className={styles.detailSubTitle}>お探しのページは、移動または削除された可能性があります。</p>
        </div>
      </div>
      <div className={styles.detailImage}>
        <Image
          className=""
          src={"/media/404notfound_00.jpg"}
          objectFit="contain"
          alt={"ページがありません。"}
          width={1000}
          height={1000}
        />
      </div>
      <div className={styles.detail404Return}>
        <Link href={`/`} passHref>
          <a>Topページに戻る</a>
        </Link>
      </div>
    </main>
    </>
  );
}
