import React from 'react';
import menu1 from '../assets/Images/appetizer@2x.jpg';
import menu2 from '../assets/Images/menu-dish1@2x.jpg';
import menu3 from '../assets/Images/menu-dessert@2x.jpg';
import { useNavigate } from 'react-router-dom';

const OurMenu = () => {

    const menuDetails = [
        {
            img:menu1,
            title:"Appetizer",
            tag:"Snacks / Salads / Soups"
        },
        {
            img:menu2,
            title:"Main Dish",
            tag:"Steaks / Grills / Pasta"
        },
        {
            img:menu3,
            title:"Dessert",
            tag:"Ice Cream / Cake / Pudding"
        },
    ]

    const navigate = useNavigate();
    
  return (
    <>
      <div className='px-10 md:px-20 py-20 bg-[#130F0C]'>
        <div className='md:w-2/5'>
            <div className=" flex items-center gap-3 text-[#D29A5A]">
                <div className="w-[50px] h-[2px] bg-[#D29A5A]"></div>
                <p className="font-semibold ">MENUS</p>
            </div>
            <h1 className="text-white font-bold text-start text-5xl mt-5">
            Our Menus
            </h1>
           <p className="text-[#D1C8BB] mt-5">
           Lorem ipsum dolorr sit amet, consectetuer adipiiscing elite.
           Aenean quis commodoo ligula eget dolor. Aeneanan massa. Cum socies
           natoque penatibus etapi magnis dis parturients montes, nascetur
           ridiculus mus cume. Donenect quam felis, ultricies nec,
           pellentesque eu, pretiumus quis, sem In.
           </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 '>
            {
                menuDetails.map(({img,title,tag},i) => {
                    return <div onClick={() => {navigate("/dish")}} key={i}  className='text-[#D29A5A] hover:text-[#D1C8BB] transition-all'>
                        <div className='overflow-hidden cursor-pointer mb-5'>
                            <img src={img} className='hover:scale-110 transition-all' alt="" />
                        </div>
                        <p className=' text-3xl font-medium'>{title}</p>
                        <p className='text-sm'>{tag}</p>
                    </div>
                })
            }
        </div>
      </div>
    </>
  )
}

export default OurMenu
