import React from "react";
import serviceMain from "../assets/Images/service.jpg";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { IoStorefront } from "react-icons/io5";

const Services = () => {


  const spaceAndVarient = [
    {
      icon:<GiForkKnifeSpoon className="text-5xl 2xl:text-[6rem] text-primary"/>,
      number:"50+",
      text:"Food Variants",
    },
    {
      icon:<IoStorefront className="text-5xl 2xl:text-[6rem] text-primary"/>,
      number:"100+",
      text:"Person Capacity",
    }
  ]

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 2xl:gap-32 items-center py-32 px-10 lg:px-20  text-white ">
        <div>
          <img src={serviceMain} alt="" />
        </div>
        <div className="lg:ps-10">
          <div className=" flex items-center gap-3 text-primary">
            <div className="w-[50px] h-[2px] bg-primary"></div>
            <p className="font-semibold 2xl:text-[1.5rem]">SERVICES</p>
          </div>
          <h1 className="text-white font-bold text-start text-5xl 2xl:text-[5rem] mt-5">
            Fresh Foods
          </h1>
          <p className="text-[#D1C8BB] 2xl:text-[2rem] mt-5">
            Lorem ipsum dolorr sit amet, consectetuer adipiiscing elite. Aenean
            quis commodoo ligula eget dolor. Aeneanan massa. Cum socies natoque
            penatibus etapi magnis dis parturients montes, nascetur ridiculus
            mus cume. Donenect quam felis, ultricies nec, pellentesque eu,
            pretiumus quis, sem In.
          </p>

          <div className="flex gap-10 2xl:gap-32 items-center mt-5 2xl:mt-20">
            {spaceAndVarient.map(({icon, number, text},i) => {
              return <div key={i} className="flex  gap-5 items-center">
                <div>
                  {icon}
                </div>

                <div className="flex flex-col 2xl:gap-5">
                  <p className="text-3xl 2xl:text-[3rem] font-bold">{number}</p>
                  <p className="text-sm 2xl:text-[2rem] text-[#D1C8BB]">{text}</p>
                </div>
              </div>
            })}
          </div>

          <p className="mt-5 2xl:mt-14 text-[#D1C8BB] text-sm 2xl:text-[2rem] ">Your attendant is important for us, <span className="hover:underline text-primary cursor-pointer">RESERVE NOW.</span></p>

        </div>
      </div>
    </>
  );
};

export default Services;
