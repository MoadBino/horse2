"use client";
import React from "react";
import LinksMap from "../../shared/LinksMap";
import SearchInput from "./SearchInput";
const Desktop = ({ data }) => {
  return (
    <div className="bg-opacity-75 xlg:block hidden  h-[64px] bg-[#28201D] w-[90%] max-w-[69rem] m-auto ">
      <div className="flex justify-between items-center h-full max-w-[100rem] m-auto w-[90%]">
        <LinksMap data={data} className={"flex gap-[30px]"} />
        <div>
          <SearchInput />
          <button className="text-white ml-[30px] ">العربية</button>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
