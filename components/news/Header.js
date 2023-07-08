import React from "react";
import Image from "next/image";
import { Main } from "../../shared/Button";
const Header = () => {
  return (
    <div className="flex justify-between gap-[30px] max-w-[69rem] w-[100%] m-auto">
      <div>
        <Image
          src={"/images/news.png"}
          width="0"
          height="0"
          sizes="full"
          className=" w-[536px] h-[344px] object-cover"
          alt="website logo"
        />
      </div>
      <div className="w-[544px] ">
        <p className="text-[32px] leading-[44px] text-[400]">
          Mimi Nk Gold Champion All Nations Cup Aac...
        </p>
        <p className="mb-[58px] mt-[13px]">
          Mimi Nk by Nofal Nk out of Cinnamon N Spice VLA Gold Champion All
          Nations Cup Aachen Germany 2015 .
        </p>
        <Main txt={"Read More"} className={"w-[161px] text-white"} />
      </div>
    </div>
  );
};

export default Header;

// font-size: 32px;
// font-family: Special Elite;
// font-style: normal;
// font-weight: 400;
// line-height: 44px;
