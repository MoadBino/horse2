"use client";
import React from "react";
import Image from "next/image";
import { Main } from "../../shared/Button";
const Story = () => {
  return (
    <div className=" relative h-[1000px]">
      <div className="absolute h-full w-full -z-[50]">
        <Image
          src={"/Home/msjed.png"}
          width="0"
          height="0"
          sizes="full"
          className="h-full w-full object-cover"
          alt="website logo"
        />
      </div>

      <div className="max-w-[100rem] w-[90%] m-auto flex  xlg:flex-row flex-col-reverse justify-between h-full items-center ">
        <div className="max-w-[500px] w-[100%] test  text-[18px]">
          <p className="test">
            An oasis in the Middle East: NK Arabians & The Nofal Kahook Family.
          </p>
          <br />
          <p className="test">
            An oasis in the Middle East: NK Arabians & The Nofal Kahook Family.
            “The difference between who you are, what you want to accomplish,
            and who you want to be, lies within what you do.” A more truer
            statement couldn’t be made of Nofal Kahook. His story and journey
            into the Arabian horse world is no fairytale and was not by mistake
            by any means. The journey is a culmination of hard work,
            determination, sacrifice, strong beliefs, and moralities that have
            been passed down unchanged for over two thousand years. The oldest
            of seven children, Nofal Kahook was born in Jerusalem, Palestine
            amidst the brewing tension, which escalated to the 1967 Arab-Israeli
            War. Experiencing the war and the devastating aftermath was enough
            to instill determination and willpower, enough so that Nofal’s
            father felt that the visceral relationship of where Nofal and his
            children came from had been instinctively instilled and decided it
            was time he moved his family back to the United States so they could
            experience the enrichment of both worlds, of course always being
            reminded where “home” was. Introduced to Arabian horses at a very
            young age.
          </p>
          <Main txt={"Read More"} className={"mt-[50px]"} />
        </div>
        <Image
          src={"/Home/family.png"}
          width="0"
          height="0"
          sizes="full"
          className="h-[423px]  max-w-[656px] w-[100%] mt-[10px] "
          alt="website logo"
        />
      </div>
    </div>
  );
};

export default Story;
