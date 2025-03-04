import React from "react";
import heroImage from "../assets/Images/hero-bg.jpg";
import { Button } from "@heroui/react";

const Hero = () => {
  return (
    // bgimage genareted form index.css
    <>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-center h-[50%] md:h-screen  px-10 md:px-20 pt-32  bg-black overflow-hidden">
        <div className="flex flex-col gap-5 justify-center text-white md:pe-10">
          <h1 className="  text-5xl  font-medium">
            Come Hungry <br />
            Leave Happy
          </h1>
          <p className="text-[#D1C8BB]">Come hungry, leave happy! Indulge in a delightful dining experience where every bite is packed with flavor. From mouthwatering appetizers to satisfying main courses, we serve delicious meals made with fresh ingredients and a passion for great taste. Whether you're craving comfort food or something new, we guarantee you'll leave with a full belly and a happy heart!</p>

          <Button className='w-fit bg-[#D29A5A] hover:bg-transparent hover:border hover:text-white tracking-wider'>Reserve Now</Button>
          
        </div>
        <div className="">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
