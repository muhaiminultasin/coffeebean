import React from "react";
import heroImage from "../assets/Images/cofee.png";
import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";

const Hero = () => {

  const navigate = useNavigate();

  return (
    
    <>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-center h-[50%] md:h-screen  px-10 md:px-20 pt-32  bg-black overflow-hidden">
        <div className="flex flex-col gap-5 justify-center text-white md:pe-10">
          <h1 className="  text-5xl  font-medium">
          More Than Coffee,<br />
          It's a Mood.
          </h1>
          <p className="text-secondary">Come hungry, leave happy! Indulge in a delightful dining experience where every bite is packed with flavor. From mouthwatering appetizers to satisfying main courses, we serve delicious meals made with fresh ingredients and a passion for great taste. Whether you're craving comfort food or something new, we guarantee you'll leave with a full belly and a happy heart!</p>

          <Button onPress={() => {navigate("/dish")}} className='w-fit bg-primary hover:bg-transparent hover:border hover:text-white tracking-wider'>Order Now</Button>
          
        </div>
        <div className="">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
