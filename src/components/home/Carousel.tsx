import Link from "next/link";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import styles from "../../styles/Layouts/Carousel.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ReactCarousel = () => {
  return (
    <>
      <Carousel>
        <div className={styles.poyoyon}>
          <Image
            className=""
            src={"/media/main_slider_00.jpg"}
            alt="GOOD-DAY中島店1"
            width={1920}
            height={1200}
          />
          <Link
            href={"https://sam004.salonanswer.com/sas/reserve/goodday/staff"}
            passHref
          >
            <a>
              <p className={styles.carouselInfo}>ご予約はこちらから</p>
            </a>
          </Link>
        </div>
        <div className={styles.poyoyon}>
          <Link href={"/service"} passHref>
            <a>
              <Image
                className=""
                src={"/media/main_slider_01.jpg"}
                alt="GOOD-DAY中島店2"
                width={2000}
                height={1250}
              />
            </a>
          </Link>
          <Link
            href={"https://page.line.me/153jsnax?openQrModal=true"}
            passHref
          >
            <a>
              <p className={styles.carouselInfo}>公式LINEお友達登録はこちら</p>
            </a>
          </Link>
        </div>
        <div className={styles.poyoyon}>
          <Link href={"/recruit"} passHref>
            <a>
              <Image
                className=""
                src={"/media/main_slider_02.jpg"}
                alt="GOOD-DAY中島店3"
                width={2000}
                height={1250}
              />
            </a>
          </Link>
          <p className={styles.carouselInfo}>
            見つけませんか？あなただけの働き方を。
          </p>
        </div>
      </Carousel>
    </>
  );
};

export default ReactCarousel;
