// ここはStylist単体のPageを表示している
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../libs/client";
import type { Stylist } from "../../../types/stylist";
import styles from "../../styles/Stylist/Detail.module.scss";
import HamburgerMenu from "../../components/layouts/HamburgerMenu";
// 各スタイリストのMenuを読み込む
import Katayama from "../../components/menu/Katayama";
import Mika from "../../components/menu/Mika";
import Nozomi from "../../components/menu/Nozomi";
import Natsuki from "../../components/menu/Natsuki";
import Dai from "../../components/menu/Dai";
import John from "../../components/menu/John";
import Fujii from "../../components/menu/Fujii";
import Ikemoto from "../../components/menu/Ikemoto";
import Mai from "../../components/menu/Mai";
import Yuka from "../../components/menu/Yuka";
import Maho from "../../components/menu/Maho";
import Nami from "../../components/menu/Nami";

type Props = {
  stylist: Stylist;
};

export default function Stylist({ stylist }: Props) {
  return (
    <>
      <HamburgerMenu />
      <div className={styles.detailArea}>
        <Link href={"/stylist"}>
          <a>
            <h2 className={styles.detailMainTitle}>Stylist</h2>
          </a>
        </Link>

        <div className={styles.detailFlex}>
          <div className={styles.detailImage}>
            <Image
              className=""
              src={stylist.eye_catch.url}
              objectFit="contain"
              alt={stylist.title + "の画像です"}
              width={500}
              height={360}
            />
          </div>

          <div className={styles.detailRight}>
            <div>
              <Link href={stylist.url}>
                <a>
                  <div className={styles.detailSubTitle}>{stylist.title}</div>
                </a>
              </Link>

              {stylist.tag && (
                <div className={styles.detailTag}>
                  <div className="">#{stylist.tag}</div>
                </div>
              )}

              <div>
                {/* Prevent HTML tags from being output */}
                <div
                  className={styles.detailProfile}
                  dangerouslySetInnerHTML={{
                    __html: `${stylist.profile}`,
                  }}
                />
              </div>
              <Link href={stylist.url}>
                <a>
                  <p className={styles.stylistDetailUrl}>指名してWeb予約する</p>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.detailBody}>
          {/* Prevent HTML tags from being output */}
          <div
            dangerouslySetInnerHTML={{
              __html: `${stylist.body}`,
            }}
          />
        </div>
        <h2 className={styles.detailMainTitle}>Hair Style</h2>
        <div className={styles.detailStyle}>
          <div className={styles.detailStyleImage}>
            <Image
              className=""
              src={stylist.style1.url}
              objectFit="contain"
              alt={stylist.title + "のスタイルです。"}
              width={500}
              height={250}
            />
          </div>

          <div className={styles.detailStyleImage}>
            <Image
              className=""
              src={stylist.style2.url}
              objectFit="contain"
              alt={stylist.title + "のスタイルです。"}
              width={500}
              height={250}
            />
          </div>

          <div className={styles.detailStyleImage}>
            <Image
              className=""
              src={stylist.style3.url}
              objectFit="contain"
              alt={stylist.title + "のスタイルです。"}
              width={500}
              height={250}
            />
          </div>
        </div>
        {/* ここでstylistIdを認識して、各自のメニューを表示します。 */}
        <div>
          {!stylist.stylist_id && <></>}
          {stylist.stylist_id == 1 ? <Katayama /> : <></>}
          {stylist.stylist_id == 2 ? <Mika /> : <></>}
          {stylist.stylist_id == 3 ? <Nozomi /> : <></>}
          {stylist.stylist_id == 4 ? <Natsuki /> : <></>}
          {stylist.stylist_id == 5 ? <Dai /> : <></>}
          {stylist.stylist_id == 6 ? <John /> : <></>}
          {stylist.stylist_id == 7 ? <Fujii /> : <></>}
          {stylist.stylist_id == 8 ? <Ikemoto /> : <></>}
          {stylist.stylist_id == 9 ? <Mai /> : <></>}
          {stylist.stylist_id == 10 ? <Yuka /> : <></>}
          {stylist.stylist_id == 11 ? <Maho /> : <></>}
          {stylist.stylist_id == 12 ? <Nami /> : <></>}
        </div>
        <p className={styles.menuDetail}>
          ※所要時間につきましては、当日の予約状況により変動する可能性もございます。
        </p>
        <p className={styles.menuDetail}>
          ※上記メニュー意外にもキャンペーン価格やセットメニューがございます。詳しい内容はスタイリストまでご連絡ください。
        </p>
        <Link href={stylist.url}>
          <a>
            <p className={styles.detailUrl}>指名してWeb予約する</p>
          </a>
        </Link>
        <div className={styles.detailOthers}>
          <Link href={"/stylist"}>
            <a>
              <h2 className="">他のStylistも見る</h2>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params?.stylist;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data = await client.get({
    endpoint: "stylists",
    contentId: idExceptArray,
  });

  return {
    props: {
      stylist: data,
    },
  };
};
