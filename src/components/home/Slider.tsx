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
            src={`/media/main_slider_00.jpg`}
            alt="画像の画像です"
            width={2000}
            height={1250}
          />
        </div>
        <div>
          <Image
            className=""
            src={`/media/main_slider_01.jpg`}
            alt="画像の画像です"
            width={2000}
            height={1250}
          />
        </div>
        <div>
          <Image
            className=""
            src={`/media/main_slider_02.jpg`}
            alt="画像の画像です"
            width={2000}
            height={1250}
          />
        </div>
      </Carousel>
    </div>
  );
}
