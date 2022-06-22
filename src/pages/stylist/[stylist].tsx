// ここはStylist単体のPageを表示している
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../libs/client";
import type { Stylist } from "../../../types/stylist";
import styles from "../../styles/Detail.module.scss";
import HamburgerMenu from "../../components/layouts/HamburgerMenu";

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
