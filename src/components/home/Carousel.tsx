import Link from "next/link";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import styles from "../../styles/Layouts/Carousel.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ReactCarousel = () => {
  const images: string[] = [
    "/media/main_slider_00.jpg",
    "/media/main_slider_01.jpg",
    "/media/main_slider_02.jpg",
  ];
  return (
    <>
      <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={4000}
      >
        {images.map((url, index) => (
          <div key={index}>
            <Image
              src={url}
              height={1250}
              width={2000}
              alt={"Topスライダーです"}
            />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default ReactCarousel;
