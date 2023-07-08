"use client";
import React from "react";
import AllNewsSlider from "../../../../components/news/AllNewsSlider";
import AllNews from "../../../../components/news/AllNews";
import "swiper/css";
const array = [
  {
    image: "",
    title: "Mimi Nk Gold Champion All Nations Cup Aac...",
    descrption:
      "Mimi Nk by Nofal Nk out of Cinnamon N Spice VLA Gold Champion All Nations Cup Aachen Germany 2015 . ",
  },
  {
    image: "",
    title: "Mimi Nk Gold Champion All Nations Cup Aac...",
    descrption:
      "Mimi Nk by Nofal Nk out of Cinnamon N Spice VLA Gold Champion All Nations Cup Aachen Germany 2015 . ",
  },
];
const page = () => {
  return (
    <div className="max-w-[1104px] w-[90%] m-auto mt-[72px] mb-[56px] ">
      <div className="flex justify-between">
        <div>
          <AllNewsSlider />
          <div className="max-w-[656px] w-[90%]">
            <p className="newstitle">
              HADAW Achieved Gold Stallion Champion In The Jericho HOLLY LAND
              Horse Show
            </p>
            <p className="newsdesc">
              NK Arabians is pleased with our stallion HADAW by ( WH Justice X
              Hadia ) for achieving the Gold Stallion Champion . Thank you our
              team in Palestine, with special thanks to Mr. Waseem Duhai and Mr.
              Abode Shalabe for a job well done in the Jericho HOLLY LAND show .
              NK Arabians is pleased with our stallion HADAW by ( WH Justice X
              Hadia ) for achieving the Gold Stallion Champion . Thank you our
              team in Palestine, with special thanks to Mr. Waseem Duhai and Mr.
              Abode Shalabe for a job well done in the Jericho HOLLY LAND show
              .NK Arabians is pleased with our stallion HADAW by ( WH Justice X
              Hadia ) for achieving the Gold Stallion Champion . Thank you our
              team in Palestine, with special thanks to Mr. Waseem Duhai and Mr.
              Abode Shalabe for a job well done in the Jericho HOLLY LAND show
              .NK Arabians is pleased with our stallion HADAW by ( WH Justice X
              Hadia ) for achieving the Gold Stallion Champion . Thank you our
              team in Palestine, with special thanks to Mr. Waseem Duhai and Mr.
              Abode Shalabe for a job well done in the Jericho HOLLY LAND show
              .NK Arabians is pleased with our stallion HADAW by ( WH Justice X
              Hadia ) for achieving the Gold Stallion Champion . Thank you our
              team in Palestine, with special thanks to Mr. Waseem Duhai and Mr.
              Abode Shalabe for a job well done in the Jericho HOLLY LAND show .
            </p>
          </div>
        </div>

        <AllNews
          data={array}
          className={"flex flex-col  items-center bg-[#D9D9D9] w-[432px]"}
        />
      </div>
    </div>
  );
};
export default page;
