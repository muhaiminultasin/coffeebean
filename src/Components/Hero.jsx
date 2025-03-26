import React from "react";
import heroImage from "../assets/Images/cofee.png";
import { useNavigate } from "react-router-dom";
import CustomBtn from "../common/CustomBtn";

const Hero = () => {

  const navigate = useNavigate();

  return (
    
    <>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-center h-[50%]   px-10 lg:px-20 pt-40 pb-20 2xl:h-screen bg-black overflow-hidden">
        <div className="flex flex-col gap-5 justify-center text-white ">
          <h1 className="  text-5xl lg:text-[3rem]  2xl:text-[8rem] font-medium 2xl:font-bold">
          More Than Coffee,<br />
          It's a Mood.
          </h1>
          <p className="text-secondary 2xl:text-[2rem]">Come hungry, leave happy! Indulge in a delightful dining experience where every bite is packed with flavor. From mouthwatering appetizers to satisfying main courses, we serve delicious meals made with fresh ingredients and a passion for great taste. Whether you're craving comfort food or something new, we guarantee you'll leave with a full belly and a happy heart!</p>

          <CustomBtn text={"Order Now "} onClick={() => navigate("/dish")} btnClass={""}/>
          
        </div>
        <div className="">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
