"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Slider = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const slider = data.map((element) => {
    return (
      <div className="">
        <SwiperSlide>
          <Image
            src={"/fam.png"}
            width="0"
            height="0"
            sizes="full"
            className="h-[209.74px] max-w-[357px]  w-[100%] "
            alt="website logo"
          />
        </SwiperSlide>
      </div>
    );
  });

  return (
    <div className="relative   h-[644px] mt-[150px]">
      <Image
        src={"/story/sliderBackground.png"}
        width="0"
        height="0"
        sizes="full"
        className="h-full  w-[100%] absolute object-cover -z-[10] "
        alt="website logo"
      />

      <div className="  flex flex-col justify-center gap-[50px] h-full max-w-[100rem] m-auto">
        <div>
          <h1 className="text-[#6E2627] font-[400]  text-[40px] leading-10">
            Gallery
          </h1>
        </div>
        <div>
          <Swiper
            Navigation
            modules={[Navigation, Pagination, Scrollbar, A11y, Grid]}
            slidesPerView={4}
            navigation
            scrollbar={{ draggable: true }}
            grid={{
              rows: 2,
              fill: "row",
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
          >
            <div className="flex justify-center items-center">{slider}</div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Slider;
