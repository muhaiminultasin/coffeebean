import React from "react";
import serviceMain from "../assets/Images/services-main.jpg";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { IoStorefront } from "react-icons/io5";

const Services = () => {


  const spaceAndVarient = [
    {
      icon:<GiForkKnifeSpoon className="text-5xl text-[#D29A5A]"/>,
      number:"50+",
      text:"Food Variants",
    },
    {
      icon:<IoStorefront className="text-5xl text-[#D29A5A]"/>,
      number:"100+",
      text:"Person Capacity",
    }
  ]

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-32 px-10 md:px-20 bg-[#130F0C] text-white ">
        <div>
          <img src={serviceMain} alt="" />
        </div>
        <div className="md:ps-10">
          <div className=" flex items-center gap-3 text-[#D29A5A]">
            <div className="w-[50px] h-[2px] bg-[#D29A5A]"></div>
            <p className="font-semibold ">SERVICES</p>
          </div>
          <h1 className="text-white font-bold text-start text-5xl mt-5">
            fresh Foods
          </h1>
          <p className="text-[#D1C8BB] mt-5">
            Lorem ipsum dolorr sit amet, consectetuer adipiiscing elite. Aenean
            quis commodoo ligula eget dolor. Aeneanan massa. Cum socies natoque
            penatibus etapi magnis dis parturients montes, nascetur ridiculus
            mus cume. Donenect quam felis, ultricies nec, pellentesque eu,
            pretiumus quis, sem In.
          </p>

          <div className="flex justify-between items-center mt-5">
            {spaceAndVarient.map(({icon, number, text}) => {
              return <div className="flex justify-between gap-3 items-center">
                <div>
                  {icon}
                </div>

                <div>
                  <p className="text-3xl font-bold">{number}</p>
                  <p className="text-sm text-[#D1C8BB]">{text}</p>
                </div>
              </div>
            })}
          </div>

          <p className="mt-5 text-[#D1C8BB] text-sm ">Your attendant is important for us, <span className="hover:underline text-[#D29A5A] cursor-pointer">RESERVE NOW.</span></p>

        </div>
      </div>
    </>
  );
};

export default Services;
