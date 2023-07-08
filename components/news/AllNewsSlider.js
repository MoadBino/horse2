"use client";
import React from "react";
import Image from "next/image";
import NextArrow from "../../assets/NextArrow";
import BackArrow from "../../assets/BackArrow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
const AllNewsSlider = () => {
  const image = [
    "/images/news.png",
    "/images/news.png",
    "/images/news.png",
    "/images/news.png",
    "/images/news.png",
    "/images/news.png",
    "/images/news.png",
    "/images/news.png",
    "/images/news.png",
    "/images/news.png",
  ];
  const slide = image.map((element) => {
    return (
      <div className="max-w-[656px] w-[100%]">
        <SwiperSlide className="max-w-[656px] w-[100%]">
          <div className="flex flex-col  items-center full ">
            <div className="">
              <Image
                src={"/images/image-27.png"}
                width="0"
                height="0"
                sizes="full"
                className="w-full h-[330px]  "
                alt="website logo"
              />
            </div>
          </div>
        </SwiperSlide>
      </div>
    );
  });
  return (
    <div className=" max-w-[656px] w-[100%]">
      <div className=" relative h-full ">
        <div className="absolute  bottom-0 h-[50px] z-[20] w-full bg-[#6E2627] bg-opacity-[0.4000000059604645]">
          <div className="swiper-button image-swiper-button-next z-[1000] bottom-0">
            <NextArrow />
          </div>
          <div className="swiper-button image-swiper-button-prev  bottom-0">
            <BackArrow />
          </div>
        </div>

        <Swiper
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {slide}
        </Swiper>
      </div>
    </div>
  );
};
export default AllNewsSlider;
