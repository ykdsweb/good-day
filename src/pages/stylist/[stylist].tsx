// ここはStylist単体のPageを表示している
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../libs/client";
import type { Stylist } from "../../../types/stylist";
import styles from "../../styles/Stylist/Detail.module.scss";
import HamburgerMenu from "../../components/layouts/HamburgerMenu";
// 各スタイリストのSNSを読み込む(暫定適用)
import KatayamaSNS from "../../components/sns/KatayamaSNS";
import MikaSNS from "../../components/sns/MikaSNS";
import NozomiSNS from "../../components/sns/NozomiSNS";
import NatsukiSNS from "../../components/sns/NatsukiSNS";
import DaiSNS from "../../components/sns/DaiSNS";
import JohnSNS from "../../components/sns/JohnSNS";
import FujiiSNS from "../../components/sns/FujiiSNS";
import IkemotoSNS from "../../components/sns/IkemotoSNS";
import MaiSNS from "../../components/sns/MaiSNS";
import YukaSNS from "../../components/sns/YukaSNS";
import MahoSNS from "../../components/sns/MahoSNS";
import NamiSNS from "../../components/sns/NamiSNS";
// 各スタイリストのMenuを読み込む(暫定適用)
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
// 各スタイリストのPaginationを読み込む(暫定適用)
import KatayamaPagination from "../../components/pagination/KatayamaPagination";
import MikaPagination from "../../components/pagination/MikaPagination";
import NozomiPagination from "../../components/pagination/NozomiPagination";
import NatsukiPagination from "../../components/pagination/NatsukiPagination";
import DaiPagination from "../../components/pagination/DaiPagination";
import JohnPagination from "../../components/pagination/JohnPagination";
import FujiiPagination from "../../components/pagination/FujiiPagination";
import IkemotoPagination from "../../components/pagination/IkemotoPagination";
import MaiPagination from "../../components/pagination/MaiPagination";
import YukaPagination from "../../components/pagination/YukaPagination";
import MahoPagination from "../../components/pagination/MahoPagination";
import NamiPagination from "../../components/pagination/NamiPagination";

type Props = {
  stylist: Stylist;
};

export default function Stylist({ stylist }: Props) {
  return (
    <>
      <HamburgerMenu />
      <div className={styles.detailArea}>
        <Link href={"/stylist"} passHref>
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
              width={1000}
              height={720}
            />
          </div>
          <div className={styles.detailRight}>
            <div>
              <Link href={stylist.url} passHref>
                <a>
                  <div className={styles.detailSubTitle}>{stylist.title}</div>
                </a>
              </Link>
              {/* ここでstylistIdを認識して、各自のSNSメニューを表示する */}
              <div>
                {!stylist.stylist_id && <></>}
                {stylist.stylist_id == 1 ? <KatayamaSNS /> : <></>}
                {stylist.stylist_id == 2 ? <MikaSNS /> : <></>}
                {stylist.stylist_id == 3 ? <NozomiSNS /> : <></>}
                {stylist.stylist_id == 4 ? <NatsukiSNS /> : <></>}
                {stylist.stylist_id == 5 ? <DaiSNS /> : <></>}
                {stylist.stylist_id == 6 ? <JohnSNS /> : <></>}
                {stylist.stylist_id == 7 ? <FujiiSNS /> : <></>}
                {stylist.stylist_id == 8 ? <IkemotoSNS /> : <></>}
                {stylist.stylist_id == 9 ? <MaiSNS /> : <></>}
                {stylist.stylist_id == 10 ? <YukaSNS /> : <></>}
                {stylist.stylist_id == 11 ? <MahoSNS /> : <></>}
                {stylist.stylist_id == 12 ? <NamiSNS /> : <></>}
              </div>

              <div className={styles.tag}>
                {stylist.tag && (
                  <div className={styles.detailTag}>
                    <div className="">#{stylist.tag}</div>
                  </div>
                )}
              </div>
              <div>
                {/* Prevent HTML tags from being output */}
                <div
                  className={styles.detailProfile}
                  dangerouslySetInnerHTML={{
                    __html: `${stylist.profile}`,
                  }}
                />
              </div>
              <div className={styles.next}>
                <Link href={stylist.url} passHref>
                  <a className={styles.nextInner}>
                    <span className={styles.nextInnerIn}>Web予約する</span>
                  </a>
                </Link>
              </div>
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
        <div className={styles.next}>
          <Link href={stylist.url} passHref>
            <a className={styles.nextInner}>
              <span className={styles.nextInnerIn}>Web予約する</span>
            </a>
          </Link>
        </div>
        {/* ここでstylistIdを認識して、各自のページネーションを表示(暫定適用) */}
        <div>
          {!stylist.stylist_id && <></>}
          {stylist.stylist_id == 1 ? <KatayamaPagination /> : <></>}
          {stylist.stylist_id == 2 ? <MikaPagination /> : <></>}
          {stylist.stylist_id == 3 ? <NozomiPagination /> : <></>}
          {stylist.stylist_id == 4 ? <NatsukiPagination /> : <></>}
          {stylist.stylist_id == 5 ? <DaiPagination /> : <></>}
          {stylist.stylist_id == 6 ? <JohnPagination /> : <></>}
          {stylist.stylist_id == 7 ? <FujiiPagination /> : <></>}
          {stylist.stylist_id == 8 ? <IkemotoPagination /> : <></>}
          {stylist.stylist_id == 9 ? <MaiPagination /> : <></>}
          {stylist.stylist_id == 10 ? <YukaPagination /> : <></>}
          {stylist.stylist_id == 11 ? <MahoPagination /> : <></>}
          {stylist.stylist_id == 12 ? <NamiPagination /> : <></>}
        </div>
        {/* <div className={styles.nextFlex}>
          <Link href={"/stylist"} passHref>
            <a className={styles.nextInner}>
              <span className={styles.nextInnerIn}>他のStylistを見る</span>
            </a>
          </Link>
          <Link href={"/stylist"} passHref>
            <a className={styles.nextInner}>
              <span className={styles.nextInnerIn}>他のStylistを見る</span>
            </a>
          </Link>
        </div> */}
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
