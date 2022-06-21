// これはTopPageを表示している
import Link from "next/link";
import Image from "next/image";
import { client } from "../libs/client";
import Slider from "../components/home/Slider";
import styles from "../styles/Index.module.scss";
import type { Stylist } from "../../types/stylist";
import HamburgerMenu from "../components/layouts/HamburgerMenu";

type Props = {
  stylists: Array<Stylist>;
};

export default function Stylist({ stylists }: Props) {
  return (
    <>
      <HamburgerMenu />
      <div className={styles.mainHome}>
        <Slider />
        <div className={styles.articleArea}>
          <h2 className={styles.articleMainTitle}>Topics</h2>
          {stylists.map((stylist) => (
            <div className={styles.articleSingle} key={stylist.id}>
              <div className={styles.articleFlex}>
                <div className={styles.articleLeft}>
                  <div className={styles.articleSubTitle}>
                    <Link href={`/stylist/${stylist.id}`} passHref>
                      <a>{stylist.title}</a>
                    </Link>
                  </div>
                  {/* Prevent HTML tags from being output */}
                  <div className={styles.articleBody}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${stylist.body}`,
                      }}
                    />
                  </div>
                  <div className={styles.articleTag}>
                    {stylist.tag && <span className="">#{stylist.tag}</span>}
                  </div>
                </div>
                <div className={styles.articleRight}>
                  <Image
                    className={styles.articleImage}
                    src={stylist.eye_catch.url}
                    objectFit="contain"
                    alt={stylist.title + "の画像です"}
                    width={240}
                    height={240}
                  />
                </div>
              </div>
            </div>
          ))}
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
