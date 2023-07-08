"use client";
import React from "react";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import Slider from "../../shared/Slider";
import Arrow from "../../assets/Home/Arrow";
const HorseSlider = () => {
  const data = [
    {
      imageName: "/horse.png",
      nameEn: "layla NK",
      idk: "TH HAMZA x Salwa Jafar",
    },
    {
      imageName: "/horse.png",
      nameEn: "layla NK",
      idk: "TH HAMZA x Salwa Jafar",
    },
    {
      imageName: "/horse.png",
      nameEn: "layla NK",
      idk: "TH HAMZA x Salwa Jafar",
    },
    {
      imageName: "/horse.png",
      nameEn: "layla NK",
      idk: "TH HAMZA x Salwa Jafar",
    },
    {
      imageName: "/horse.png",
      nameEn: "layla NK",
      idk: "TH HAMZA x Salwa Jafar",
    },
  ];

  const slid = data.map((element) => {
    return (
      <SwiperSlide 
      key={element.imageName}>
        <div className="flex justify-center">
          <div className="w-[250px] h-[348px] bg-white flex flex-col justify-between">
            <div>
              <Image
                src={element.imageName}
                width="0"
                height="0"
                sizes="full"
                className=" w-[250px] object-cover"
                alt="website logo"
              />
              <div className="p-2">
                <p className="leading-5 text-[24px] text-[400] mt-[10px]">
                  {element.nameEn}
                </p>
                <p className="mt-[10px]">{element.idk}</p>
              </div>
            </div>
            <button
              className={`flex justify-between items-center p-3  bg-[#6E2627] text-[#C3AA4E] shadow-lg h-[56px] shadow-[#C3AA4E]`}
            >
              Read more
              <span>
                <Arrow />
              </span>
            </button>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className=" relative h-[608px] ">
      <div className="flex justify-center h-full  items-center">
        <div className="absolute top-0 w-[100%]  -z-[50]">
          <Image
            src={"/Home/wall.png"}
            width="0"
            height="0"
            sizes="full"
            className="h-[608px] w-full object-cover"
            alt="website logo"
          />
        </div>
        <div className="max-w-[100rem]   flex flex-col justify-center h-full   w-[90%] m-auto">
          <div className="pl-[70px]">
            <button className="text-[#C3AA4E] text-[56px] mr-[80px]">
              Mares
            </button>
            <button className="text-[#C3AA4E] text-[56px] mb-[40px]">
              Stallions
            </button>
          </div>

          <Slider slidesPerView={4} navigation={true}>
            {slid}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HorseSlider;
