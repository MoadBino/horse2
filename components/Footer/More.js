"use client";
import React from "react";
import LinksMap from "../../shared/LinksMap";
const More = () => {
  const data = [
    { link: "Languges", href: "#" },
    { link: "Policies", href: "#" },
    { link: "Support", href: "#" },
  ];

  return (
    <div className="text-[#C3AA4E] w-[126px] ">
      <p className=" h-[28px]">More</p>
      <LinksMap
        data={data}
        className={"text-[12px] mds:text-[14px]   flex flex-col mt-[#C3AA4E]"}
      />
    </div>
  );
};

export default More;
