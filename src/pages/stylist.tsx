// これはTopPageを表示している
import Link from "next/link";
import Image from "next/image";
import { client } from "../libs/client";
import type { Stylist } from "../../types/stylist";
import styles from "../styles/Stylist.module.scss";
import HamburgerMenu from "../components/layouts/HamburgerMenu";

type Props = {
  stylists: Array<Stylist>;
};

export default function Stylist({ stylists }: Props) {
  return (
    <>
      <HamburgerMenu />
      <div className={styles.mainHome}>
        <div className={styles.stylistArea}>
          <h2 className={styles.stylistMainTitle}>Stylist</h2>
          <div className={styles.stylistMainTitleText}>スタイリスト一覧</div>
          <div className={styles.stylistColumn}>
            {stylists.map((stylist) => (
              <div className={styles.stylistSingle} key={stylist.id}>
                <Link
                  className={styles.stylistImage}
                  href={`/stylist/${stylist.id}`}
                  passHref
                >
                  <a>
                    <Image
                      src={stylist.eye_catch.url}
                      objectFit="contain"
                      alt={stylist.title + "の画像です"}
                      width={1000}
                      height={1000}
                    />
                  </a>
                </Link>
                <div className={styles.stylistSubTitle}>
                  <Link href={`/stylist/${stylist.id}`} passHref>
                    <a>{stylist.title}</a>
                  </Link>
                </div>
                <div className={styles.stylistTag}>
                  {stylist.tag && <span className="">#{stylist.tag}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "stylists" });

  return {
    props: {
      stylists: data.contents,
    },
  };
};
