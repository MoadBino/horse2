import React from "react";
import Link from "next/link";
const LinksMap = ({ data, className, txtColor = "text-white" }) => {
  const links = data?.map((element) => {
    const { link, href } = element;
    return (
      <div key={link} className={link == "Home" ? "text-[#C3AA4E]" : "text-white"}>
        <Link key={href} href={href}>
          {link}
        </Link>
      </div>
    );
  });
  return <div className={className}>{links}</div>;
};

export default LinksMap;
