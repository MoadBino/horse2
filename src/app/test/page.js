"use client";
import React from "react";
import Image from "next/image";
import Slider from "../../../shared/Slider";
import { SwiperSlide } from "swiper/react";
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const page = () => {
  return (
    <div className=" relative  ">
      <div className=" top-0 absolute  w-full  -z-[50] h-[693px]">
        <Image
          src={"/images/singelhorse.png"}
          width="0"
          height="0"
          sizes="full"
          className="h-[693px] w-full blur-[1.5rem] -z-[50] object-cover  "
          alt="website logo"
        />
      </div>
      <div className="max-w-[69rem] w-[100%] m-auto h-full">
        <div className="flex justify-center items-center ">
          <Slider>
            <div className="flex justify-center items-center   w-[424px]">
              <Image
                src={"/images/singelhorse.png"}
                width="0"
                height="0"
                sizes="full"
                className="h-[404px] w-[100%] "
                alt="slider image"
              />
            </div>
          </Slider>
        </div>
      </div>
      <div className="bg-[#6E2627] h-[276px]">
        <div className="max-w-[69rem] m-auto">
          <div className="w-[320px] ">
            <p>Nofal NK</p>
            <p>
              (Ever After NA x Adjora) 2011 Purebred Grey Stallion Frozen Semen
              is now available North America - contact Mr. Braden Davidson
              Phone: +4805328049 - +6134829860 Email: braden@arabianelement.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
