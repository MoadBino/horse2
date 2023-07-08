"use client";
import React from "react";
import Linkedin from "../../assets/socialMedia/Linkedin";
import Instgram from "../../assets/socialMedia/Instgram";
import Facebook from "../../assets/socialMedia/Facebook";
import Twitter from "../../assets/socialMedia/Twitter";
const SocialMedia = () => {
  return (
    <div className="bg-[#C3AA4E] h-[36px] w-[100%]">
      <div className=" text-[12px] mds:text-[14px]     max-w-[100rem] w-[90%] m-auto flex justify-between items-center h-full">
        <p>© 2022 NKarabian</p>
        <div className="flex gap-4 ">
          <Linkedin />
          <Facebook />
          <Twitter />
          <Instgram />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
