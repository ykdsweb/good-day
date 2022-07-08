import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Service/Service.module.scss";

const ToStylist: React.FC = () => {
  return (
    <>
      <div className={styles.main}>
        <h2 className={styles.featuresMainTitle}>GOOD-DAYで働く</h2>
        <p className={styles.featuresMainSubTitle}>スタイリストさんへ</p>
        <>
          <ul className={styles.flex}>
            <li className={styles.stylistImage}>
              <Image
                src={"/media/Stylist_00.png"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
              <p className={styles.fontBord}>収入Upも夢じゃない</p>
              <p>開業のために貯金してください。</p>
            </li>
            <li className={styles.stylistImage}>
              <Image
                src={"/media/Stylist_01.png"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
              <p className={styles.fontBord}>脅威の歩合</p>
              <p>通常ではあり得ない!!</p>
            </li>
          </ul>
        </>
        <>
          <ul className={styles.flex}>
            <li className={styles.stylistImage}>
              <Image
                src={"/media/Stylist_02.png"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
              <p className={styles.fontBord}>周りの目が気にならない</p>
              <p>スタイリストもお客様もリラックス。</p>
            </li>
            <li className={styles.stylistImage}>
              <Image
                src={"/media/Stylist_03.png"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
              <p className={styles.fontBord}>コレを提供したかった…</p>
              <p>仕入も、持ち込み自由です。</p>
            </li>
          </ul>
        </>
        <>
          <ul className={styles.flex}>
            <li className={styles.stylistImage}>
              <Image
                src={"/media/Stylist_04.png"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
              <p className={styles.fontBord}>土日祝休めちゃう</p>
              <p>バランスを見て、好きなだけ。</p>
            </li>
            <li className={styles.stylistImage}>
              <Image
                src={"/media/Stylist_05.png"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
              <p className={styles.fontBord}>意外だけど真理</p>
              <p>自分のペースで仕事できるから◎</p>
            </li>
          </ul>
        </>
        <div className={styles.returnToNext}>
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
