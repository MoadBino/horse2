"use client";
import React from "react";
import Story from "../../components/Home/Story";
import HeaderSlider from "../../components/Home/HeaderSlider";
import HorseSlider from "../../components/Home/HorseSlider";
import News from "../../components/Home/News";
const index = (props) => {
  console.log(props);
  return (
    <div>
      <HeaderSlider />
      <Story />
      <HorseSlider />
      <News />
    </div>
  );
};

export default index;

export async function getServerSideProps(context) {
  return {
    props: { data: false },
  };
}
