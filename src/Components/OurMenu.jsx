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
            tag:"Snacks / Salads / Soups",
        },
        {
            img:menu2,
            title:"Main Dish",
            tag:"Steaks / Grills / Pasta",
        },
        {
            img:menu3,
            title:"Dessert",
            tag:"Ice Cream / Cake / Pudding",
        },
    ]

    const navigate = useNavigate();
    
  return (
    <>
      <div className='px-10 lg:px-20 py-20'>
        <div className='lg:w-3/5'>
            <div className=" flex items-center gap-3 text-primary">
                <div className="w-[50px] h-[2px] bg-primary"></div>
                <p className="font-semibold 2xl:text-[1.5rem]">MENUS</p>
            </div>
            <h1 className="text-white font-bold text-start text-5xl 2xl:text-[5rem] mt-5">
            Our Menus
            </h1>
           <p className="text-secondary mt-5 2xl:text-[2rem]">
           Lorem ipsum dolorr sit amet, consectetuer adipiiscing elite.
           Aenean quis commodoo ligula eget dolor. Aeneanan massa. Cum socies
           natoque penatibus etapi magnis dis parturients montes, nascetur
           ridiculus mus cume. Donenect quam felis, ultricies nec,
           pellentesque eu, pretiumus quis, sem In.
           </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 sm:gap-5 gap-10 2xl:gap-32 mt-10 2xl:mt-32'>
            {
                menuDetails.map(({img,title,tag,path},i) => {
                    return <div onClick={() => {navigate(`/dish`)}} key={i}  className='text-primary hover:text-secondary transition-all'>
                        <div className='overflow-hidden cursor-pointer mb-5'>
                            <img src={img} className='w-full hover:scale-110 transition-all' alt="" />
                        </div>
                        <p className=' text-3xl 2xl:text-[3rem] 2xl:mt-10 font-medium'>{title}</p>
                        <p className='text-sm 2xl:text-[2rem] 2xl:mt-10'>{tag}</p>
                    </div>
                })
            }
        </div>
      </div>
    </>
  )
}

export default OurMenu
