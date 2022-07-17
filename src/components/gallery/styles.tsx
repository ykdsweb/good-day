import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Gallery/Gallery.module.scss";
import NamiStyles from "../../components/gallery/NamiStyles";

const Styles: React.FC = () => {
  return (
    <>
      <div id="Works" className={styles.main}>
        <h2 className={styles.featuresMainTitle}>GOOD-DAY Hit Styles</h2>
        <p className={styles.featuresMainSubTitle}>スタイル一覧</p>
        <NamiStyles />
        <>
          <ul className={styles.flex}>
            <li className={styles.stylistImage}>
              <Image
                src={"/styles/Mai_02.jpg"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
            </li>
            <li className={styles.stylistImage}>
              <Image
                src={"/styles/Mai_01.jpg"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
            </li>
            <li className={styles.stylistImage}>
              <Image
                src={"/styles/Mai_00.jpg"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
            </li>
          </ul>
        </>
        <>
          <ul className={styles.flex}>
            <li className={styles.stylistImage}>
              <Image
                src={"/styles/Fujii_02.jpg"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
            </li>
            <li className={styles.stylistImage}>
              <Image
                src={"/styles/Fujii_01.jpg"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
            </li>
            <li className={styles.stylistImage}>
              <Image
                src={"/styles/Fujii_00.jpg"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
            </li>
          </ul>
        </>
        <>
          <ul className={styles.flex}>
            <li className={styles.stylistImage}>
              <Image
                src={"/styles/Dai_02.jpg"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
            </li>
            <li className={styles.stylistImage}>
              <Image
                src={"/styles/Dai_01.jpg"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
            </li>
            <li className={styles.stylistImage}>
              <Image
                src={"/styles/Dai_00.jpg"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
            </li>
          </ul>
        </>
        <>
          <ul className={styles.flex}>
            <li className={styles.stylistImage}>
              <Image
                src={"/styles/nozomi_02.jpg"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
            </li>
            <li className={styles.stylistImage}>
              <Image
                src={"/styles/nozomi_01.jpg"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
            </li>
            <li className={styles.stylistImage}>
              <Image
                src={"/styles/nozomi_00.jpg"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
            </li>
          </ul>
        </>
        <>
          <ul className={styles.flex}>
            <li className={styles.stylistImage}>
              <Image
                src={"/styles/katayama_02.jpg"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
            </li>
            <li className={styles.stylistImage}>
              <Image
                src={"/styles/katayama_01.jpg"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
            </li>
            <li className={styles.stylistImage}>
              <Image
                src={"/styles/katayama_00.jpg"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
            </li>
          </ul>
        </>
        {/* <div className={styles.next}>
          <Link href={"/recruit"} passHref>
            <a className={styles.nextInner}>
              <span className={styles.nextInnerIn}>もっと見る</span>
            </a>
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default Styles;
