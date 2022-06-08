// テスト
import Link from "next/link";
import Image from 'next/image';
import type { Article } from '../../../types/article';

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
              <div className="">
                {/* Prevent HTML tags from being output */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${article.body}`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }