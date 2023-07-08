"use client";
import React from "react";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import Slider from "../../shared/Slider";
const data = [
  {
    imageName: "/family.png",
    nameEn: "layla NK",
    idk: "TH HAMZA x Salwa",
  },
  {
    imageName: "/family.png",
    nameEn: "layla NK",
    idk: "TH HAMZA x Salwa Jafar",
  },
  {
    imageName: "/family.png",
    nameEn: "layla NK",
    idk: "TH HAMZA x Salwa Jafar",
  },
  {
    imageName: "/family.png",
    nameEn: "layla NK",
    idk: "TH HAMZA x Salwa Jafar",
  },
  {
    imageName: "/family.png",
    nameEn: "layla NK",
    idk: "TH HAMZA x Salwa Jafar",
  },
];
const News = () => {
  const slide = data?.map((element) => {
    const length = element.nameEn.length;
    console.log(length);
    return (
      <SwiperSlide key={element.imageName}>
        <div className="flex flex-col  items-end h-full ">
          <div className="w-[352px]  h-[348px] bg-white flex flex-col justify-between">
            <div>
              <Image
                src={element.imageName}
                width="0"
                height="0"
                sizes="full"
                className="w-[305.8px] object-cover"
                alt="website logo"
              />
              <div>
                <p className="leading-5 text-[24px] text-[400] mt-[10px]">
                  {element.nameEn}
                </p>
                <p className="mt-[10px]">{element.idk}</p>
              </div>
            </div>
            <button
              className={` w-[164px]  text-center bg-[#6E2627] text-[#C3AA4E] shadow-lg h-[56px] shadow-[#C3AA4E]`}
            >
              Read more
            </button>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className="mt-[56px] h-[697.52px]">
      <div className="max-w-[100rem] w-[90%] m-auto  ">
        <p className="text-[56px] pb-[64px] text-[#C3AA4E] pl-[45px] ">
          News & Happenings
        </p>
        <Slider slidesPerView={4} navigation={true}>
          {slide}
        </Slider>
      </div>
    </div>
  );
};

export default News;

// "use client";
// import React from "react";
// import { SwiperSlide } from "swiper/react";
// import Image from "next/image";
// import Slider from "../../shared/Slider";
// const data = [
//   {
//     imageName: "/family.png",
//     nameEn: "layla NK",
//     idk: "TH HAMZA x Salwa Jafar",
//   },
//   {
//     imageName: "/family.png",
//     nameEn: "layla NK",
//     idk: "TH HAMZA x Salwa Jafar",
//   },
//   {
//     imageName: "/family.png",
//     nameEn: "layla NK",
//     idk: "TH HAMZA x Salwa Jafar",
//   },
//   {
//     imageName: "/family.png",
//     nameEn: "layla NK",
//     idk: "TH HAMZA x Salwa Jafar",
//   },
//   {
//     imageName: "/family.png",
//     nameEn: "layla NK",
//     idk: "TH HAMZA x Salwa Jafar",
//   },
// ];
// const News = () => {
//   const slide = data?.map((element) => {
//     return (
//       <SwiperSlide>
//         <div className="w-[305.8px]  h-[348px] bg-white flex flex-col justify-between">
//           <div>
//             <Image
//               src={element.imageName}
//               width="0"
//               height="0"
//               sizes="full"
//               className=" w-[305.8px] object-cover"
//               alt="website logo"
//             />
//             <div className="p-2">
//               <p className="leading-5 text-[24px] text-[400] mt-[10px]">
//                 {element.nameEn}
//               </p>
//               <p className="mt-[10px]">{element.idk}</p>
//             </div>
//           </div>
//           <button
//             className={`flex justify-between items-center p-3  bg-[#6E2627] text-[#C3AA4E] shadow-lg h-[56px] shadow-[#C3AA4E]`}
//           >
//             Read more
//           </button>
//         </div>
//       </SwiperSlide>
//     );
//   });
//   return (
//     <div className="">
//       <div className="max-w-[100rem] w-[90%] m-auto">
//         <p className="text-[56px] text-[#C3AA4E]">News & Happenings</p>
//         <Slider slidesPerView={3} navigation={true}>
//           {slide}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default News;
