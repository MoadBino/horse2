"use client";
import React from "react";
import Links from "./Links";
import Contact from "./Contact";
import SocialMedia from "./SocialMedia";
import More from "./More";
const Footer = () => {
  return (
 
      <div className="md:h-[289px] h-[414px] bg-[#28201D]">
        <div className=" max-w-[100rem] w-[80%] md:w-[90%] m-auto flex mds:flex-row  flex-col justify-evenly   mds:justify-between mds:items-center h-full">
          <Contact />
          <div className="flex justify-between max-w-[350px]  ">
            <Links />
            <More />
            
          </div>
        </div>
        <SocialMedia />
      </div>
 
  );
};

export default Footer;
