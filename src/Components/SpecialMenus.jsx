import React from "react";
import menu1 from '../assets/Images/special-menu-1.png'
import menu2 from '../assets/Images/special-menu-2.jpg'
import menu3 from '../assets/Images/special-menu-3.jpg'

const SpecialMenus = () => {

  const menuItems = [
    {
      name: "Citrus Cured Salmon with Honey",
      price: "$20",
    },
    {
      name: "Pork Tenderloin in Yogurt",
      price: "$25",
    },
    {
      name: "Grilled Pork with Lemons",
      price: "$27",
    },
    {
      name: "Roasted Prawns with Coriander",
      price: "$18",
    },
    {
      name: "Prawn Sausage Cassoulet",
      price: "$19",
    },
  ];

  const images = [
    {
        img:menu1,
    },
    {
        img:menu2,
    },
    {
        img:menu3,
    }
  ]

  return (
    <>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 px-10 items-center md:px-20 pb-32 bg-[#130F0C] text-white">
        <div className="md:pe-10 mt-16 md:mt-0">
          <div className=" flex items-center gap-3 text-[#D29A5A]">
            <div className="w-[50px] h-[2px] bg-[#D29A5A]"></div>
            <p className="font-semibold ">THIS WEEK</p>
          </div>
          <h1 className="text-white font-bold text-start text-5xl mt-5">
            Specials Menu
          </h1>

          <div className="mt-5 space-y-3">
            {
                menuItems.map(({name, price},i) => {
                    return <div key={i} className="flex justify-between items-center  border-b  border-[#D29A5A] border-b'
                    ">
                            <p className="text-large font-medium pb-3 ">{name}</p>
                            <p className="text-[#D29A5A] pb-3">{price}</p>
                    </div>
                })
            }
          </div>
        </div>

        <div className="columns-2  space-y-3">
            {images.map(({img},i) => {
                return <img key={i} src={img} alt="" className="w-full"/>
            })}
        </div>
      </div>
{/* Best quality foods */}
      <div className="best-food flex flex-col justify-center items-center  text-white h-[50vh] md:h-[90vh]">
        <h1 className="text-5xl font-bold text-center">Best Quality Foods</h1>
        <div className="flex w-fit mx-auto mt-5 gap-5 justify-center items-center">
          <div className="w-[50px] h-[2px] bg-[#D29A5A]"></div>
          <p className="text-[#D29A5A] text-2xl">*</p>
          <div className="w-[50px] h-[2px] bg-[#D29A5A]"></div>
        </div>
      </div>
    </>
  );
};

export default SpecialMenus;
