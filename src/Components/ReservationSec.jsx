import { Button } from '@heroui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReservationSec = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className='py-10 px-10 md:px-20 grid gris-cols-1 md:grid-cols-2 '>
        <div>
        <div className=" flex items-center gap-3 text-primary">
                <div className="w-[50px] h-[2px] bg-primary"></div>
                <p className="font-semibold ">Reserve</p>
            </div>
            <h1 className="text-white font-bold text-start text-5xl mt-5">
                Reserve A Table
            </h1>
           <p className="text-[#D1C8BB] mt-5">
           Lorem ipsum dolorr sit amet, consectetuer adipiiscing elite.
           Aenean quis commodoo ligula eget dolor. Aeneanan massa. Cum socies
           natoque penatibus etapi magnis dis parturients montes, nascetur
           ridiculus mus cume. Donenect quam felis, ultricies nec,
           pellentesque eu, pretiumus quis, sem In.
           </p>
        </div>

        <div className='flex  md:justify-end items-center mt-5 md:mt-0'>
        <Button onPress={() => {navigate("/contact")}} className=' bg-primary hover:bg-transparent hover:border hover:text-white tracking-wider'>Make A reservation</Button>
        </div>
      </div>
    </>
  )
}

export default ReservationSec;
