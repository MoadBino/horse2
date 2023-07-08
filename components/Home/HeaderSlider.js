"use client";
import React from "react";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import Slider from "../../shared/Slider";
const HeaderSlider = () => {
  const data = [
    { imageName: "/Home/horse.png" },
    { imageName: "/Home/horse.png" },
    { imageName: "/Home/horse.png" },
    { imageName: "/Home/horse.png" },
    { imageName: "/Home/horse.png" },
  ];

  const slid = data.map((element) => {
    return (
      <div key={element.imageName}>
        <SwiperSlide>
          <Image
            src={element.imageName}
            width="0"
            height="0"
            sizes="full"
            className="h-full w-full object-cover"
            alt="website logo"
          />
        </SwiperSlide>
      </div>
    );
  });

  return (
    <div>
      <Slider navigation={true}>{slid}</Slider>
    </div>
  );
};

export default HeaderSlider;
