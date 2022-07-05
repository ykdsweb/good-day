import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import styles from "../../styles/Layouts/Carousel.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ReactCarousel = () => {
  return (
    <>
      <Carousel>
        <div>
          <Image
            className=""
            src={`/media/main_slider_00.jpg`}
            alt="画像の画像です"
            width={2000}
            height={1250}
          />
          <p className={styles.carouselInfo}>楽しもう。自分だけの時間を。</p>
        </div>
        <div>
          <Image
            className=""
            src={`/media/main_slider_01.jpg`}
            alt="画像の画像です"
            width={2000}
            height={1250}
          />
          <p className={styles.carouselInfo}>
            お客様とスタイリストに優しいヘアサロン。
          </p>
        </div>
        <div>
          <Image
            className=""
            src={`/media/main_slider_02.jpg`}
            alt="画像の画像です"
            width={2000}
            height={1250}
          />
          <p className={styles.carouselInfo}>
            見つけませんか？あなただけの働き方を。
          </p>
        </div>
      </Carousel>
    </>
  );
};

export default ReactCarousel;
