"use client";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Slider = ({
  spaceBetween,
  slidesPerView,
  navigation,
  pagination,
  scrollbar,
  onSwiper,
  onSlideChange,
  children,
}) => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation={navigation}
        pagination={pagination}
        scrollbar={scrollbar}
        onSwiper={(swiper) => onSwiper}
        onSlideChange={() => onSlideChange}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default Slider;
