// これはTopPageを表示している
import Link from "next/link";
import Image from "next/image";
import { client } from "../libs/client";
import type { Article } from "../../types/article";
import styles from "../styles/Index.module.scss";
import Slider from "../components/home/Slider";

type Props = {
  articles: Array<Article>;
};

export default function Home({ articles }: Props) {
  return (
    <div className={styles.mainHome}>
      <Slider />
      <div className={styles.articleArea}>
      <h2 className={styles.articleMainTitle}>Topics</h2>
        {articles.map((article) => (
          <div className={styles.articleSingle} key={article.id}>
            <div className={styles.articleFlex}>
              <div className={styles.articleLeft}>
                <div className={styles.articleSubTitle}>
                  <Link href={`/article/${article.id}`} passHref>
                    <a>{article.title}</a>
                  </Link>
                </div>
                {/* Prevent HTML tags from being output */}
                <div className={styles.articleBody}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${article.body}`,
                    }}
                  />
                </div>
                <div className={styles.articleTag}>
                  {article.tag && <span className="">#{article.tag}</span>}
                </div>
              </div>
              <div className={styles.articleRight}>
                <Image
                  className={styles.articleImage}
                  src={article.eye_catch.url}
                  objectFit="contain"
                  alt={article.title + "の画像です"}
                  width={240}
                  height={240}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
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
