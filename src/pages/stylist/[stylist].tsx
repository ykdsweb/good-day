// ここは記事単体のPageを表示している
import { GetServerSideProps } from "next";
import Image from "next/image";
import { client } from "../../libs/client";
import styles from "../../styles/Home.module.scss";
import type { Stylist } from "../../../types/stylist";

type Props = {
  stylist: Stylist;
};

export default function Stylist({ stylist }: Props) {
  return (
    <div className="">
      <div className="">
        <div className="">
          <Image
            className=""
            src={stylist.eye_catch.url}
            objectFit="contain"
            alt={stylist.title + "の画像です"}
            width={240}
            height={240}
          />
          <div className="">
            <div className="">{stylist.title}</div>
          </div>
          {stylist.tag && (
            <div className="">
              <div className="">#{stylist.tag}</div>
            </div>
          )}
          <div className="">
            {/* Prevent HTML tags from being output */}
            <div
              dangerouslySetInnerHTML={{
                __html: `${stylist.body}`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
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
