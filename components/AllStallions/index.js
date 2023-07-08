import React from "react";
import Image from "next/image";
import Arrow from "../../assets/Home/Arrow";
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

const index = () => {
  const slider = data.map((element) => {
    return (
      <div className="w-[250px] h-[348px]  flex flex-col justify-between">
        <div>
          <Image
            src={"/horse.png"}
            width="0"
            height="0"
            sizes="full"
            className=" w-[250px] object-cover"
            alt="website logo"
          />
          <div className="p-2">
            <p className="leading-5 text-[24px] text-[400] mt-[10px]">test</p>
            <p className="mt-[10px]"> test</p>
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
    );
  });
  return <div className="flex flex-wrap gap-[30px] justify-center "> {slider}</div>;
};

export default index;
