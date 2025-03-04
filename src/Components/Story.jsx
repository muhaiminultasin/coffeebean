import React from "react";
import story from "../assets/Images/our-story.jpg";
import { Button } from "@heroui/react";
import { FaCheck } from "react-icons/fa";

const Story = () => {
  const storyList = [
    {
      text: "Fine Dining",
    },
    {
      text: "Food Catering",
    },
    {
      text: "Food Delivery",
    },
    {
      text: "Wedding Ceremony",
    },
  ];

  return (
    <>
      <div className="py-32 px-10 md:px-20 bg-[#130F0C] item text-center text-white">
        <p className="text-white font-semibold text-3xl leading-relaxed">
          <i>
            The discovery of a new dish does more for the happiness of <br />{" "}
            mankind than the discovery of a star.
          </i>
        </p>

        <p className="text-[#D29A5A] mt-5 text-2xl">Anthelme Brillat-Savarin</p>

        <div className="flex w-fit mx-auto mt-5 gap-5 justify-center items-center">
          <div className="w-[50px] h-[2px] bg-[#D29A5A]"></div>
          <p className="text-[#D29A5A] text-2xl">*</p>
          <div className="w-[50px] h-[2px] bg-[#D29A5A]"></div>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10 md:mt-20">
          <img src={story} alt="" />

          <div className="md:ps-10 text-start">
            <div className=" flex items-center gap-3 text-[#D29A5A]">
              <div className="w-[50px] h-[2px] bg-[#D29A5A]"></div>
              <p className="font-semibold ">OUR STORY</p>
            </div>
            <h1 className="text-white font-bold text-start text-5xl mt-5">
              The Story
            </h1>
            <p className="text-[#D1C8BB] mt-5">
              Lorem ipsum dolorr sit amet, consectetuer adipiiscing elite.
              Aenean quis commodoo ligula eget dolor. Aeneanan massa. Cum socies
              natoque penatibus etapi magnis dis parturients montes, nascetur
              ridiculus mus cume. Donenect quam felis, ultricies nec,
              pellentesque eu, pretiumus quis, sem In.
            </p>

            <div className="grid grid-cols-2 my-5">
              {storyList.map(({ text }) => {
                return (
                  <div className="flex items-center gap-2 justify-start text-[#D1C8BB]">
                    <div className="bg-[#D29A5A] p-0.5 rounded-full "><FaCheck className="text-[8px] text-black"/></div> { text}
                  </div>
                );
              })}
            </div>

            <Button className="w-fit bg-[#D29A5A] text-black font-bold mt-5">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
