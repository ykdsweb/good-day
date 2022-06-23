// ここはStylist単体のPageを表示している
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../libs/client";
import type { Stylist } from "../../../types/stylist";
import styles from "../../styles/Detail.module.scss";
import HamburgerMenu from "../../components/layouts/HamburgerMenu";

import Katayama from "../../components/menu/Katayama";
import Tahara from "../../components/menu/Tahara";
import Isomura from "../../components/menu/Isomura";
import Maeda from "../../components/menu/Maeda";
import Tanabe from "../../components/menu/Tanabe";
import Kanda from "../../components/menu/Kanda";
import Fujii from "../../components/menu/Fujii";
import Ikemoto from "../../components/menu/Ikemoto";
import Imaishi from "../../components/menu/Imaishi";
import Fujiwara from "../../components/menu/Fujiwara";
import Tsuchida from "../../components/menu/Tsuchida";
import Ono from "../../components/menu/Ono";

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
        {/* ここにstylistIdを認識して、各自のメニューを表示します。 */}
        <div>{stylist.stylist_id}</div>
        <div>
          {stylist.stylist_id == 1 ? <Katayama /> : <></>}
          {stylist.stylist_id == 2 ? <Tahara /> : <></>}
          {stylist.stylist_id == 3 ? <Isomura /> : <></>}
          {stylist.stylist_id == 4 ? <Maeda /> : <></>}
          {stylist.stylist_id == 5 ? <Tanabe /> : <></>}
          {stylist.stylist_id == 6 ? <Kanda /> : <></>}
          {stylist.stylist_id == 7 ? <Fujii /> : <></>}
          {stylist.stylist_id == 8 ? <Ikemoto /> : <></>}
          {stylist.stylist_id == 9 ? <Imaishi /> : <></>}
          {stylist.stylist_id == 10 ? <Fujiwara /> : <></>}
          {stylist.stylist_id == 11 ? <Tsuchida /> : <></>}
          {stylist.stylist_id == 12 ? <Ono /> : <></>}
          {!stylist.stylist_id && <></>}
        </div>
        <Link href={stylist.url}>
          <a>
            <p className={styles.detailUrl}>指名してWeb予約する</p>
          </a>
        </Link>
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
