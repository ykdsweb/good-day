import React from "react";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import styles from "../../styles/Layouts/Slider.module.scss";

export default function Slider() {
  return (
    <div className="">
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
            className=""
            src={`/media/main_test_00.jpg`}
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
            src={`/media/main_test_01.jpg`}
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
            src={`/media/main_test_02.jpg`}
            layout="responsive"
            objectFit="contain"
            alt="画像の画像です"
            width={240}
            height={240}
          />
        </div>
      </Carousel>
    </div>
  );
}
