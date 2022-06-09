import React from "react"
import Image from 'next/image'
import Carousel from "react-material-ui-carousel"
import styles from '../../styles/Slider.module.scss'

export default function Slider(){
    return(
       <section className={styles.sliderArea}>
         <Carousel
          indicatorIconButtonProps={{
            style: {
                padding: '1rem'
            }
          }}
          indicatorContainerProps={{
            style: {
              
            }
          }}
          navButtonsWrapperProps={{
            style: {
                marginTop: "0"
            }
          }}
          navButtonsProps={{
            style: {
              color: "#fafafa",
              background: "#333333"
            }
          }}>
            <div>
                <Image
                className={styles.sliderImg}
                src={`/media/blog-template-example.webp`}
                objectFit="contain"
                alt="画像の画像です"
                width={240}
                height={240}
                />
            </div>
            <div>
                <Image
                className=""
                src={`/media/GOOD-DAY_mainLogo_05.png`}
                objectFit="contain"
                alt="画像の画像です"
                width={240}
                height={240}
                />
            </div>
            <div>
                <Image
                className=""
                src={`/media/OneStep_logo_01.jpg`}
                objectFit="contain"
                alt="画像の画像です"
                width={240}
                height={240}
                />
            </div>
         </Carousel>
       </section>
    )
  }
