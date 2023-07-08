import React from "react";
import Image from "next/image";
import { Main } from "../../shared/Button";
const AllNews = ({ data ,className}) => {
  const result = data.map((element) => {
    return (
      <div className="flex flex-col  max-w-[352px] mb-[50px]  w-[90%] gap-[20px] ">
        <Image
          src={"/images/news.png"}
          width="0"
          height="0"
          sizes="full"
          className=" w-[305.8px] h-[196px] object-cover"
          alt="website logo"
        />
        <div>
          <p className="title">{element.title}</p>
          <p className="descrption">{element.descrption}</p>
          <Main txt={"Read More"} className={"w-[161.106px] text-white mt-[40px]"} />
        </div>
      </div>
    );
  });
  return (
    <div className={className}>
      {result}
    </div>
  );
};

export default AllNews;
