// これはTopPageを表示している
import Link from "next/link";
import Image from "next/image";
import { client } from "../libs/client";
import Works from "../components/home/Works";
import styles from "../styles/Home.module.scss";
import type { Article } from "../../types/article";
import ReactCarousel from "../components/home/Carousel";
import HamburgerMenu from "../components/layouts/HamburgerMenu";

type Props = {
  articles: Array<Article>;
};

export default function Home({ articles }: Props) {
  return (
    <>
      <HamburgerMenu />
      <div className={styles.mainHome}>
        <ReactCarousel />
        <div className={styles.articleArea}>
          <h2 className={styles.articleMainTitle}>Topics</h2>
          {articles.map((article) => (
            <div className={styles.articleSingle} key={article.id}>
              <div className={styles.articleFlex}>
                <div className={styles.articleLeft}>
                  <Link href={`/article/${article.id}`} passHref>
                    <a>
                      <Image
                        className={styles.articleImage}
                        src={article.eye_catch.url}
                        objectFit="contain"
                        alt={article.title + "の画像です"}
                        width={240}
                        height={240}
                      />
                    </a>
                  </Link>
                </div>
                <div className={styles.articleRight}>
                  <div className={styles.articleSubTitle}>
                    <Link href={`/article/${article.id}`} passHref>
                      <a>{article.title}</a>
                    </Link>
                  </div>
                  {/* Prevent HTML tags from being output */}
                  <Link href={`/article/${article.id}`} passHref>
                    <a>
                      <div className={styles.articleBody}>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `${article.body}`,
                          }}
                        />
                      </div>
                    </a>
                  </Link>
                  <div className={styles.articleTag}>
                    {article.tag && <p className="">#{article.tag}</p>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Works />
      </div>
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "articles",
    queries: { limit: 3, offset: 0 },
  });

  return {
    props: {
      articles: data.contents,
    },
  };
};
