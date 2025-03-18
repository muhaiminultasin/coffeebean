import React from 'react';
import { IoMdBook } from "react-icons/io";
import { LuPhone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { GoClock } from "react-icons/go";

const ContactDetails = () => {

    const Details = [
        {
            icon:<IoMdBook className='text-[40px] text-[#D29A5A]'/>,
            text1:"Sovy Restaurant, Jl. Raya",
            text2:"Canggu, Badung, Bali.",
        },
        {
            icon:<LuPhone className='text-[40px] text-[#D29A5A]'/>,
            text1:"(+62) 34 53 45 334",
            text2:"(+62) 34 53 45 334",
        },
        {
            icon:<TfiEmail className='text-[40px] text-[#D29A5A]'/>,
            text1:"Reservation.com",
            text2:"Books.com",
        },
        {
            icon:<GoClock className='text-[40px] text-[#D29A5A]'/>,
            text1:"Open 04:00 pm WITA",
            text2:"Closed 01:00 am WITA",
        },
    ]

  return (
    <>
      <div className='px-10 md:px-20 grid grid-cols-1 md:grid-cols-4 space-y-10 md:space-y-0 py-20 bg-[#130F0C]'>
        {Details.map(({icon, text1,text2},i) => {
            return <div key={i} className='flex md:justify-center items-center  gap-5'>
                <div>
                    {icon}
                </div>
                <div className='text-[#D1C8BB] text-sm'>
                    <p>{text1}</p>
                    <p>{text2}</p>
                </div>
            </div>
        })}

      </div>
    </>
  )
}

export default ContactDetails
