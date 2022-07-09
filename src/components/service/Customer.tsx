import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Service/Service.module.scss";

const Customer: React.FC = () => {
  return (
    <>
      <div id="Customer" className={styles.main}>
        <h2 className={styles.featuresMainTitle}>GOOD-DAYのこだわり</h2>
        <p className={styles.featuresMainSubTitle}>お客様へ</p>
        <>
          <ul className={styles.flex}>
            <li>
              <Image
                src={"/media/commitment_img_00.png"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
              <p className={styles.fontBord}>完全個別対応</p>
              <p>一人のスタイリストが全て担当。</p>
            </li>
            <li>
              <Image
                src={"/media/commitment_img_06.png"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
              <p className={styles.fontBord}>待ち時間ゼロ</p>
              <p>完全予約制だからスムーズにご案内。</p>
            </li>
          </ul>
        </>
        <>
          <ul className={styles.flex}>
            <li>
              <Image
                src={"/media/commitment_img_02.png"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
              <p className={styles.fontBord}>営業時間長め</p>
              <p>遅い時間までやってます。</p>
              <p>(詳しくはお問合せください)</p>
            </li>
            <li>
              <Image
                src={"/media/commitment_img_01.png"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
              <p className={styles.fontBord}>全て個室</p>
              <p>お部屋は半個室・個室で安心です。</p>
            </li>
          </ul>
        </>
        <>
          <ul className={styles.flex}>
            <li>
              <Image
                src={"/media/commitment_img_07.png"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
              <p className={styles.fontBord}>スマホで楽々予約</p>
              <p>簡単に予約ができちゃいます。</p>
            </li>
            <li>
              <Image
                src={"/media/commitment_img_05.png"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
              <p className={styles.fontBord}>安心の技術補償</p>
              <p>1週間以内のお直し無料です。</p>
            </li>
          </ul>
        </>
        <div className={styles.next}>
          <Link
            href={"https://sam004.salonanswer.com/sas/reserve/goodday/staff"}
            passHref
          >
            <a className={styles.nextInner}>
              <span className={styles.nextInnerIn}>Web予約はこちら</span>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Customer;
