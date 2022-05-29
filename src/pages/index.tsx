// pages/index.js
import Link from "next/link";
import { client } from "../../libs/client";
import type { Article } from '../../types/article';

type Props = {
  articles: Array<Article>;
}

export default function Home({ articles }: Props) {
  return (
    <>
      <h1 className="">
        記事一覧
      </h1>
      <div className="">
        {articles.map(article => (
          <div className="" key={article.id}>
            <img
              className=""
              src={article.eye_catch.url}
              alt="Sunset in the mountains"
            />
            <div className="">
              <Link href={`/article/${article.id}`} passHref>
                <a>{article.title}</a>
              </Link>
            </div>
            <div className="">
              {article.tag && (
                <span className="">
                  #{article.tag}
                </span>
              )}
            </div>
            <div className="">
              <p>{article.body}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "articles" });

  return {
    props: {
      articles: data.contents,
    },
  };
};

