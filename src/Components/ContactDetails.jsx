import React from 'react';
import { IoMdBook } from "react-icons/io";
import { LuPhone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { GoClock } from "react-icons/go";

const ContactDetails = () => {

    const Details = [
        {
            icon:<IoMdBook className='text-[40px] 2xl:text-[6rem] text-primary'/>,
            text1:"Sovy Restaurant, Jl. Raya",
            text2:"Canggu, Badung, Bali.",
        },
        {
            icon:<LuPhone className='text-[40px] 2xl:text-[6rem] text-primary'/>,
            text1:"(+62) 34 53 45 334",
            text2:"(+62) 34 53 45 334",
        },
        {
            icon:<TfiEmail className='text-[40px] 2xl:text-[6rem] text-primary'/>,
            text1:"Reservation.com",
            text2:"Books.com",
        },
        {
            icon:<GoClock className='text-[40px] 2xl:text-[6rem] text-primary'/>,
            text1:"Open 04:00 pm WITA",
            text2:"Closed 01:00 am WITA",
        },
    ]

  return (
    <>
      <div className='px-10 lg:px-20 2xl:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mx-auto'>
        {Details.map(({icon, text1,text2},i) => {
            return <div key={i} className='flex my-5 items-center  gap-5'>
                <div>
                    {icon}
                </div>
                <div className='text-secondary text-sm flex flex-col sm:gap-2 2xl:gap-5'>
                    <p className='2xl:text-[2rem]'>{text1}</p>
                    <p className='2xl:text-[2rem]'>{text2}</p>
                </div>
            </div>
        })}

      </div>
    </>
  )
}

export default ContactDetails
