"use client";
import React from "react";
import Image from "next/image";
const Contact = () => {
  return (
    <div className="flex md:items-center md:gap-[68px] gap-[8px] flex-col md:flex-row  ">
      <Image
        src={"/Footer/footerImage.png"}
        width="0"
        height="0"
        sizes="full"
        className="mds:w-[180px] mds:h-[180px] h-[85px] w-[85px] mt-[10px]"
        alt="website logo"
      />
      <div className=" text-[12px] mds:text-[14px] not-italic	font-medium	leading-5 tracking-[0.25px] h-[124px] text-[#C3AA4E]">
        <p>Nofal & Muntaha Kahook</p>
        <p>Amman, Jordan • Ramallah, </p>
        <p>Palestine • Plantation, </p>
        <p>Floridavoice + 962 7777 95599 • </p>
        <p>USA +1 954 640 8220</p>
      </div>
    </div>
  );
};

export default Contact;


`http://192.168.1.12:3000/`