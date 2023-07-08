"use client";
import React from "react";
import Search from "../../assets/navbar/Search";
const SearchInput = () => {
  return (
    <div className="inline-block group  ">
      <Search className={"   inline-block mr-[10px] "} />
      <input
        placeholder="search"
        className="ipad:w-[0px] group-hover:pl-[10px] w-[150px] group-hover:w-[150px] transition-all duration-500 rounded-2xl "
      ></input>
    </div>
  );
};

export default SearchInput;
