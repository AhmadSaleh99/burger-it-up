"use client";

import image1 from "@/public/images/image-1.jpg";
import image2 from "@/public/images/image-2.jpg";
import image3 from "@/public/images/image-3.jpg";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay } from "swiper/modules";
import Image from "next/image";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay]}
        className="mySwiper w-11/12"
      >
        <SwiperSlide>
          <Image
            className="w-full h-72"
            src={image1}
            width={400}
            height={600}
            alt="image1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-72"
            src={image2}
            width={400}
            height={600}
            alt="image1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-72"
            src={image3}
            width={400}
            height={600}
            alt="image1"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
