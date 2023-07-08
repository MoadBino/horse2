import React from "react";
import Header from "../../../components/news/Header";
import AllNews from "../../../components/news/AllNews";
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
    <div className="max-w-[69rem]  w-[90%] m-auto">
      <p className="pageName">News & Happenings</p>
      <Header />
      <AllNews
        data={array}
        className={"flex flex-wrap  justify-between gap-2 mt-[63px] "}
      />
    </div>
  );
};

export default page;
