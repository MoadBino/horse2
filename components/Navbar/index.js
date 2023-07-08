"use client";

import React, { useState } from "react";
import Image from "next/image";
import Desktop from "./Desktop";
import SideBar from "./SideBar";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const data = [
    { link: "Home", href: "/" },
    { link: "Our Story", href: "/ourstory" },
    { link: "Stallions", href: "stallions" },
    { link: "Mares", href: "#" },
    { link: "News & Happenings", href: "news" },
    { link: "Contact", href: "#" },
  ];
  return (
    <>
      <div className="flex justify-center flex-col items-center sticky z-[50] top-0">
        <Image
          src={"/Footer/footerImage.png"}
          width="0"
          height="0"
          sizes="full"
          className="h-[85px] w-[85px] mt-[10px] "
          alt="website logo"
        />
        <Desktop data={data} />
      </div>
      <SideBar open={open} setOpen={setOpen} data={data} />
    </>
  );
};

export default Navbar;
