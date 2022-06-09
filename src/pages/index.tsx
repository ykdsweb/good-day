// これはTopPageを表示している
import Link from "next/link";
import Image from 'next/image';
import { client } from "../libs/client";
import type { Article } from '../../types/article';
import Button from "@material-ui/core/Button"
import styles from '../styles/Home.module.scss';
import Slider from '../components/home/Slider';

type Props = {
  articles: Array<Article>;
}

// 次回、ルーティングから

export default function Home({ articles }: Props)  {
  return (
    <section className={styles.mainHome}>
      <h1 className="">
        記事一覧
      </h1>
      <Slider />
      <div className="">
        {articles.map(article => (
          <div className="" key={article.id}>
            <Image
              className=""
              src={article.eye_catch.url}
              objectFit="contain"
              alt={(article.title) + "の画像です"}
              width={240}
              height={240}
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
            {/* Prevent HTML tags from being output */}
            <div className="">
              <div
                dangerouslySetInnerHTML={{
                  __html: `${article.body}`
                }}
              />
            </div>
            <Button variant="contained">Default</Button>
          </div>
        ))}
      </div>
    </section>
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

