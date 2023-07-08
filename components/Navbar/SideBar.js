"use client";
import React from "react";
import LinksMap from "../../shared/LinksMap";
import Open from "../../assets/Home/Open";
const SideBar = ({ open, setOpen, data }) => {
  return (
    <div className="bg-[#28201D] max-w-[100rem] m-auto w-[80%] xlg:hidden block ">
      <button className="" onClick={() => setOpen(true)}>
        <Open />
      </button>
      <div
        className={`fixed left-[0] top-3 ${
          open ? "w-[250px] " : "w-[0px]"
        } transition-all duration-500 bg-[#28201D]    h-full `}
      >
        <div className={`${open ? "block" : "hidden"}`}>
          <button
            className="text-white bg-[#28201D] z-50  p-[20px]"
            onClick={() => {
              console.log(false);
            }}
          >
            close
          </button>
          <LinksMap data={data} className={"flex flex-col items-center"} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
