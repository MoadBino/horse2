"use client";
import React from "react";

import LinksMap from "../../shared/LinksMap";
const Links = () => {
  const data = [
    { link: "About", href: "#" },
    { link: "Stallions", href: "#" },
    { link: "Mares", href: "#" },
    { link: "Mohr", href: "#" },
    { link: "News", href: "#" },
    { link: "Contact", href: "#" },
  ];
  return (
    <div className="text-[#C3AA4E] w-[126px]">
      <p className=" h-[28px]">Links</p>
      <LinksMap
        data={data}
        className={"text-[12px] mds:text-[14px]  flex flex-col mt-[#C3AA4E]"}
      />
    </div>
  );
};

export default Links;
