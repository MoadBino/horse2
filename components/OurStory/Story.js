"use client";
import React from "react";
import Image from "next/image";
const Story = () => {
  let counter = -1;
  const chesseImage = {
    0: {
      image: "/story/Horse.png",
      cssImage: "left-[0] bottom-[0]  w-[114.05px]  h-[178.51px]",
    },
    1: {
      image: "/story/queenBlur.png",
      cssImage: "  right-0  w-[114.05px]  h-[178.51px] ",
    },
    2: {
      image: "/story/queen.png",
      cssImage: "right-0 bottom-[0] w-[114.05px]  h-[178.51px]   ",
    },
    3: {
      image: "/story/castel.png",
      cssImage: "right-[-10px] bottom-0 w-[114.05px]  h-[178.51px]   ",
    },
  };
  const data = [
    {
      image: "/Home/family.png",
      txt: `“The difference between who you are, what you want to accomplish, and who you want to be, lies within what you do.” A more truer statement couldn’t be made of Nofal Kahook. His story and journey into the Arabian horse world is no fairytale and was not by mistake by any means. The journey is a culmination of hard work, determination, sacrifice, strong beliefs, and moralities that have been passed down unchanged for over two thousand years.The oldest of seven children, Nofal Kahook was born in Jerusalem, Palestine amidst the brewing tension, which escalated to the 1967 Arab-Israeli War. Experiencing the war and the devastating aftermath was enough to instill determination and willpower, enough so that Nofal’s father felt that the visceral relationship of where Nofal and his children came from had been instinctively instilled and decided it was time he moved his family back to the United States so they could experience the enrichment of both worlds, of course always being reminded where “home” was.
          Introduced to Arabian horses at a very young age, Nofal’s father was influential in the then five year old boys infatuation with the Bedouin       tribes scattered along the outskirts of his hometown of Al-Bireh, a small town outside of Ramallah, Palestine. As with most first introductions to       Arabian horses, the love was instant and a flame had been ignited within the young boy. Nofal and his father drove by daily and each time Nofal’s       curiosity grew and grew. After many requests asking his father to stop, it would be this one time his father finally obliged and made a stop to       visit with the Bedouins. With no horse sense whatsoever, Nofal jumped out of the car, taking no caution of any surroundings, and ran to the white       horse who was tied to the side of the tent, the horse belonging to the Sheikh. “It was a magical moment”, says Nofal. “I can close my eyes and       still remember that brisk cold morning like it was yesterday – the air was clean and crisp. I ran so fast towards the snowwhite mare all awhile my       father yelling at me to come back to him. Of course, the Arabian mare’s natural instinct comforted me as she lowered her head and rested it in my       arms as I hugged her for what seemed like an eternity,” continues Nofal. “It was right then and there that I knew Arabian horses were someday       going to be a part of my life. After all, Arabian horses have been apart of our culture for thousands of years,” continued Kahook. For the next       several years, Nofal would go with his father to visit the Bedouins and the grey mare. “I think it was about a year later that the Chief gestured       to me to get up on the mare, and of course I didn’t even blink. A leg up and I was off trotting around. Looking back now and remembering these       experiences really brought out the love of the Arabian horse and instilled in me a great respect for this creature that played such an important       role in our culture, in the evolution of man,” says Nofal.`,
    },
    {
      image: "/Home/family.png",
      txt: `“The difference between who you are, what you want to accomplish, and who you want to be, lies within what you do.” A more truer statement couldn’t be made of Nofal Kahook. His story and journey into the Arabian horse world is no fairytale and was not by mistake by any means. The journey is a culmination of hard work, determination, sacrifice, strong beliefs, and moralities that have been passed down unchanged for over two thousand years.The oldest of seven children, Nofal Kahook was born in Jerusalem, Palestine amidst the brewing tension, which escalated to the 1967 Arab-Israeli War. Experiencing the war and the devastating aftermath was enough to instill determination and willpower, enough so that Nofal’s father felt that the visceral relationship of where Nofal and his children came from had been instinctively instilled and decided it was time he moved his family back to the United States so they could experience the enrichment of both worlds, of course always being reminded where “home” was.
            Introduced to Arabian horses at a very young age, Nofal’s father was influential in the then five year old boys infatuation with the Bedouin       tribes scattered along the outskirts of his hometown of Al-Bireh, a small town outside of Ramallah, Palestine. As with most first introductions to       Arabian horses, the love was instant and a flame had been ignited within the young boy. Nofal and his father drove by daily and each time Nofal’s       curiosity grew and grew. After many requests asking his father to stop, it would be this one time his father finally obliged and made a stop to       visit with the Bedouins. With no horse sense whatsoever, Nofal jumped out of the car, taking no caution of any surroundings, and ran to the white       horse who was tied to the side of the tent, the horse belonging to the Sheikh. “It was a magical moment”, says Nofal. “I can close my eyes and       still remember that brisk cold morning like it was yesterday – the air was clean and crisp. I ran so fast towards the snowwhite mare all awhile my       father yelling at me to come back to him. Of course, the Arabian mare’s natural instinct comforted me as she lowered her head and rested it in my       arms as I hugged her for what seemed like an eternity,” continues Nofal. “It was right then and there that I knew Arabian horses were someday       going to be a part of my life. After all, Arabian horses have been apart of our culture for thousands of years,” continued Kahook. For the next       several years, Nofal would go with his father to visit the Bedouins and the grey mare. “I think it was about a year later that the Chief gestured       to me to get up on the mare, and of course I didn’t even blink. A leg up and I was off trotting around. Looking back now and remembering these       experiences really brought out the love of the Arabian horse and instilled in me a great respect for this creature that played such an important       role in our culture, in the evolution of man,” says Nofal.`,
    },
    {
      image: "/Home/family.png",
      txt: `“The difference between who you are, what you want to accomplish, and who you want to be, lies within what you do.” A more truer statement couldn’t be made of Nofal Kahook. His story and journey into the Arabian horse world is no fairytale and was not by mistake by any means. The journey is a culmination of hard work, determination, sacrifice, strong beliefs, and moralities that have been passed down unchanged for over two thousand years.The oldest of seven children, Nofal Kahook was born in Jerusalem, Palestine amidst the brewing tension, which escalated to the 1967 Arab-Israeli War. Experiencing the war and the devastating aftermath was enough to instill determination and willpower, enough so that Nofal’s father felt that the visceral relationship of where Nofal and his children came from had been instinctively instilled and decided it was time he moved his family back to the United States so they could experience the enrichment of both worlds, of course always being reminded where “home” was.
            Introduced to Arabian horses at a very young age, Nofal’s father was influential in the then five year old boys infatuation with the Bedouin       tribes scattered along the outskirts of his hometown of Al-Bireh, a small town outside of Ramallah, Palestine. As with most first introductions to       Arabian horses, the love was instant and a flame had been ignited within the young boy. Nofal and his father drove by daily and each time Nofal’s       curiosity grew and grew. After many requests asking his father to stop, it would be this one time his father finally obliged and made a stop to       visit with the Bedouins. With no horse sense whatsoever, Nofal jumped out of the car, taking no caution of any surroundings, and ran to the white       horse who was tied to the side of the tent, the horse belonging to the Sheikh. “It was a magical moment”, says Nofal. “I can close my eyes and       still remember that brisk cold morning like it was yesterday – the air was clean and crisp. I ran so fast towards the snowwhite mare all awhile my       father yelling at me to come back to him. Of course, the Arabian mare’s natural instinct comforted me as she lowered her head and rested it in my       arms as I hugged her for what seemed like an eternity,” continues Nofal. “It was right then and there that I knew Arabian horses were someday       going to be a part of my life. After all, Arabian horses have been apart of our culture for thousands of years,” continued Kahook. For the next       several years, Nofal would go with his father to visit the Bedouins and the grey mare. “I think it was about a year later that the Chief gestured       to me to get up on the mare, and of course I didn’t even blink. A leg up and I was off trotting around. Looking back now and remembering these       experiences really brought out the love of the Arabian horse and instilled in me a great respect for this creature that played such an important       role in our culture, in the evolution of man,” says Nofal.`,
    },

    {
      image: "/Home/family.png",
      txt: `“The difference between who you are, what you want to accomplish, and who you want to be, lies within what you do.” A more truer statement couldn’t be made of Nofal Kahook. His story and journey into the Arabian horse world is no fairytale and was not by mistake by any means. The journey is a culmination of hard work, determination, sacrifice, strong beliefs, and moralities that have been passed down unchanged for over two thousand years.The oldest of seven children, Nofal Kahook was born in Jerusalem, Palestine amidst the brewing tension, which escalated to the 1967 Arab-Israeli War. Experiencing the war and the devastating aftermath was enough to instill determination and willpower, enough so that Nofal’s father felt that the visceral relationship of where Nofal and his children came from had been instinctively instilled and decided it was time he moved his family back to the United States so they could experience the enrichment of both worlds, of course always being reminded where “home” was.
            Introduced to Arabian horses at a very young age, Nofal’s father was influential in the then five year old boys infatuation with the Bedouin       tribes scattered along the outskirts of his hometown of Al-Bireh, a small town outside of Ramallah, Palestine. As with most first introductions to       Arabian horses, the love was instant and a flame had been ignited within the young boy. Nofal and his father drove by daily and each time Nofal’s       curiosity grew and grew. After many requests asking his father to stop, it would be this one time his father finally obliged and made a stop to       visit with the Bedouins. With no horse sense whatsoever, Nofal jumped out of the car, taking no caution of any surroundings, and ran to the white       horse who was tied to the side of the tent, the horse belonging to the Sheikh. “It was a magical moment”, says Nofal. “I can close my eyes and       still remember that brisk cold morning like it was yesterday – the air was clean and crisp. I ran so fast towards the snowwhite mare all awhile my       father yelling at me to come back to him. Of course, the Arabian mare’s natural instinct comforted me as she lowered her head and rested it in my       arms as I hugged her for what seemed like an eternity,” continues Nofal. “It was right then and there that I knew Arabian horses were someday       going to be a part of my life. After all, Arabian horses have been apart of our culture for thousands of years,” continued Kahook. For the next       several years, Nofal would go with his father to visit the Bedouins and the grey mare. “I think it was about a year later that the Chief gestured       to me to get up on the mare, and of course I didn’t even blink. A leg up and I was off trotting around. Looking back now and remembering these       experiences really brought out the love of the Arabian horse and instilled in me a great respect for this creature that played such an important       role in our culture, in the evolution of man,” says Nofal.`,
    },
    {
      image: "/Home/family.png",
      txt: `“The difference between who you are, what you want to accomplish, and who you want to be, lies within what you do.” A more truer statement couldn’t be made of Nofal Kahook. His story and journey into the Arabian horse world is no fairytale and was not by mistake by any means. The journey is a culmination of hard work, determination, sacrifice, strong beliefs, and moralities that have been passed down unchanged for over two thousand years.The oldest of seven children, Nofal Kahook was born in Jerusalem, Palestine amidst the brewing tension, which escalated to the 1967 Arab-Israeli War. Experiencing the war and the devastating aftermath was enough to instill determination and willpower, enough so that Nofal’s father felt that the visceral relationship of where Nofal and his children came from had been instinctively instilled and decided it was time he moved his family back to the United States so they could experience the enrichment of both worlds, of course always being reminded where “home” was.
            Introduced to Arabian horses at a very young age, Nofal’s father was influential in the then five year old boys infatuation with the Bedouin       tribes scattered along the outskirts of his hometown of Al-Bireh, a small town outside of Ramallah, Palestine. As with most first introductions to       Arabian horses, the love was instant and a flame had been ignited within the young boy. Nofal and his father drove by daily and each time Nofal’s       curiosity grew and grew. After many requests asking his father to stop, it would be this one time his father finally obliged and made a stop to       visit with the Bedouins. With no horse sense whatsoever, Nofal jumped out of the car, taking no caution of any surroundings, and ran to the white       horse who was tied to the side of the tent, the horse belonging to the Sheikh. “It was a magical moment”, says Nofal. “I can close my eyes and       still remember that brisk cold morning like it was yesterday – the air was clean and crisp. I ran so fast towards the snowwhite mare all awhile my       father yelling at me to come back to him. Of course, the Arabian mare’s natural instinct comforted me as she lowered her head and rested it in my       arms as I hugged her for what seemed like an eternity,” continues Nofal. “It was right then and there that I knew Arabian horses were someday       going to be a part of my life. After all, Arabian horses have been apart of our culture for thousands of years,” continued Kahook. For the next       several years, Nofal would go with his father to visit the Bedouins and the grey mare. “I think it was about a year later that the Chief gestured       to me to get up on the mare, and of course I didn’t even blink. A leg up and I was off trotting around. Looking back now and remembering these       experiences really brought out the love of the Arabian horse and instilled in me a great respect for this creature that played such an important       role in our culture, in the evolution of man,” says Nofal.`,
    },
    {
      image: "/Home/family.png",
      txt: `“The difference between who you are, what you want to accomplish, and who you want to be, lies within what you do.” A more truer statement couldn’t be made of Nofal Kahook. His story and journey into the Arabian horse world is no fairytale and was not by mistake by any means. The journey is a culmination of hard work, determination, sacrifice, strong beliefs, and moralities that have been passed down unchanged for over two thousand years.The oldest of seven children, Nofal Kahook was born in Jerusalem, Palestine amidst the brewing tension, which escalated to the 1967 Arab-Israeli War. Experiencing the war and the devastating aftermath was enough to instill determination and willpower, enough so that Nofal’s father felt that the visceral relationship of where Nofal and his children came from had been instinctively instilled and decided it was time he moved his family back to the United States so they could experience the enrichment of both worlds, of course always being reminded where “home” was.
            Introduced to Arabian horses at a very young age, Nofal’s father was influential in the then five year old boys infatuation with the Bedouin       tribes scattered along the outskirts of his hometown of Al-Bireh, a small town outside of Ramallah, Palestine. As with most first introductions to       Arabian horses, the love was instant and a flame had been ignited within the young boy. Nofal and his father drove by daily and each time Nofal’s       curiosity grew and grew. After many requests asking his father to stop, it would be this one time his father finally obliged and made a stop to       visit with the Bedouins. With no horse sense whatsoever, Nofal jumped out of the car, taking no caution of any surroundings, and ran to the white       horse who was tied to the side of the tent, the horse belonging to the Sheikh. “It was a magical moment”, says Nofal. “I can close my eyes and       still remember that brisk cold morning like it was yesterday – the air was clean and crisp. I ran so fast towards the snowwhite mare all awhile my       father yelling at me to come back to him. Of course, the Arabian mare’s natural instinct comforted me as she lowered her head and rested it in my       arms as I hugged her for what seemed like an eternity,” continues Nofal. “It was right then and there that I knew Arabian horses were someday       going to be a part of my life. After all, Arabian horses have been apart of our culture for thousands of years,” continued Kahook. For the next       several years, Nofal would go with his father to visit the Bedouins and the grey mare. “I think it was about a year later that the Chief gestured       to me to get up on the mare, and of course I didn’t even blink. A leg up and I was off trotting around. Looking back now and remembering these       experiences really brought out the love of the Arabian horse and instilled in me a great respect for this creature that played such an important       role in our culture, in the evolution of man,” says Nofal.`,
    },
    {
      image: "/Home/family.png",
      txt: `“The difference between who you are, what you want to accomplish, and who you want to be, lies within what you do.” A more truer statement couldn’t be made of Nofal Kahook. His story and journey into the Arabian horse world is no fairytale and was not by mistake by any means. The journey is a culmination of hard work, determination, sacrifice, strong beliefs, and moralities that have been passed down unchanged for over two thousand years.The oldest of seven children, Nofal Kahook was born in Jerusalem, Palestine amidst the brewing tension, which escalated to the 1967 Arab-Israeli War. Experiencing the war and the devastating aftermath was enough to instill determination and willpower, enough so that Nofal’s father felt that the visceral relationship of where Nofal and his children came from had been instinctively instilled and decided it was time he moved his family back to the United States so they could experience the enrichment of both worlds, of course always being reminded where “home” was.
            Introduced to Arabian horses at a very young age, Nofal’s father was influential in the then five year old boys infatuation with the Bedouin       tribes scattered along the outskirts of his hometown of Al-Bireh, a small town outside of Ramallah, Palestine. As with most first introductions to       Arabian horses, the love was instant and a flame had been ignited within the young boy. Nofal and his father drove by daily and each time Nofal’s       curiosity grew and grew. After many requests asking his father to stop, it would be this one time his father finally obliged and made a stop to       visit with the Bedouins. With no horse sense whatsoever, Nofal jumped out of the car, taking no caution of any surroundings, and ran to the white       horse who was tied to the side of the tent, the horse belonging to the Sheikh. “It was a magical moment”, says Nofal. “I can close my eyes and       still remember that brisk cold morning like it was yesterday – the air was clean and crisp. I ran so fast towards the snowwhite mare all awhile my       father yelling at me to come back to him. Of course, the Arabian mare’s natural instinct comforted me as she lowered her head and rested it in my       arms as I hugged her for what seemed like an eternity,” continues Nofal. “It was right then and there that I knew Arabian horses were someday       going to be a part of my life. After all, Arabian horses have been apart of our culture for thousands of years,” continued Kahook. For the next       several years, Nofal would go with his father to visit the Bedouins and the grey mare. “I think it was about a year later that the Chief gestured       to me to get up on the mare, and of course I didn’t even blink. A leg up and I was off trotting around. Looking back now and remembering these       experiences really brought out the love of the Arabian horse and instilled in me a great respect for this creature that played such an important       role in our culture, in the evolution of man,” says Nofal.`,
    },
  ];

  const story = data.map((element, index) => {
    counter > 2 ? (counter = 0) : (counter = counter + 1);
    return (
      <div
        key={index}
        className={`flex justify-center items-center ${
          chesseImage[counter]
        } gap-[50px] h-auto ${chesseImage?.index}  ${
          index % 2 == 0
            ? "ipad:flex-row flex-col "
            : "ipad:flex-row-reverse flex-col"
        }  `}
      >
        <div className=" flex justify-center items-center  relative    h-[410px] max-w-[500px] w-[100%] ">
          <div className={`absolute  w-full h-full`}>
            <Image
              src={chesseImage?.[counter]?.image}
              width="0"
              height="0"
              sizes="full"
              className={`absolute ${chesseImage?.[counter]?.cssImage}`}
              alt="website logo"
            />
          </div>
          <div className="absolute -z-10">
            <Image
              src={"/story/Background.png"}
              width="0"
              height="0"
              sizes="full"
              className="h-[400px] max-w-[426px]  w-[100%] "
              alt="website logo"
            />
          </div>
          <div>
            <Image
              src={"/story/man.png"}
              width="0"
              height="0"
              sizes="full"
              className="h-[320px]  max-w-[330px] w-[100%]"
              alt="website logo"
            />
          </div>
        </div>

        <p className="  w-[90%] ">{element.txt}</p>
      </div>
    );
  });
  return (
    <div className="bg-[#F5F5F5] bg-opacity-25">
      <div className=" flex flex-col gap-[100px] max-w-[100rem] w-[90%] m-auto">
        {story}
      </div>
    </div>
  );
};

export default Story;
