import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
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
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <Image
            className=""
            src={`/media/main_slider_01.jpg`}
            alt="画像の画像です"
            width={2000}
            height={1250}
          />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <Image
            className=""
            src={`/media/main_slider_02.jpg`}
            alt="画像の画像です"
            width={2000}
            height={1250}
          />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </>
  );
};

export default ReactCarousel;
