import React from "react";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import styles from "../../styles/Slider.module.scss";

export default function Slider() {
  return (
    <section className={styles.sliderArea}>
      <Carousel
        indicatorIconButtonProps={{
          style: {
            padding: "1rem",
          },
        }}
        indicatorContainerProps={{
          style: {},
        }}
        navButtonsWrapperProps={{
          style: {
            marginTop: "0",
          },
        }}
        navButtonsProps={{
          style: {
            color: "#fafafa",
            background: "#333333",
          },
        }}
      >
        <div>
          <Image
            className={styles.sliderImg}
            src={`/media/GOOD-DAY_mainImage_01.jpg`}
            layout="responsive"
            objectFit="contain"
            alt="画像の画像です"
            width={240}
            height={240}
          />
        </div>
        <div>
          <Image
            className=""
            src={`/media/GOOD-DAY_mainImage_02.jpg`}
            layout="responsive"
            objectFit="contain"
            alt="画像の画像です"
            width={240}
            height={240}
          />
        </div>
        <div>
          <Image
            className=""
            src={`/media/GOOD-DAY_mainImage_03.jpg`}
            layout="responsive"
            objectFit="contain"
            alt="画像の画像です"
            width={240}
            height={240}
          />
        </div>
      </Carousel>
    </section>
  );
}
