// ここは記事単体のPageを表示している
import { GetServerSideProps } from "next";
import Image from "next/image";
import { client } from "../../libs/client";
import styles from "../../styles/Home.module.scss";
import type { Article } from "../../../types/article";

type Props = {
  article: Article;
};

export default function Article({ article }: Props) {
  return (
    <div className="">
      <div className="">
        <div className="">
          <Image
            className=""
            src={article.eye_catch.url}
            objectFit="contain"
            alt={article.title + "の画像です"}
            width={240}
            height={240}
          />
          <div className="">
            <div className="">{article.title}</div>
          </div>
          {article.tag && (
            <div className="">
              <div className="">#{article.tag}</div>
            </div>
          )}
          <div className="">
            {/* Prevent HTML tags from being output */}
            <div
              dangerouslySetInnerHTML={{
                __html: `${article.body}`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params?.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data = await client.get({
    endpoint: "articles",
    contentId: idExceptArray,
  });

  return {
    props: {
      article: data,
    },
  };
};
