import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@heroui/react";
import ConHero from "../Components/ConHero";
import { IoMdBook } from "react-icons/io";
import { LuPhone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { GoClock } from "react-icons/go";

const Contact = () => {
  const [reservation, setReservation] = useState({ name: "", email: "", phone: "", subject: "" , date: "", time: "" });

  const handleChange = (e) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "your_service_id", 
      "your_template_id", 
      reservation,
      "your_user_id" 
    ).then(
      () => alert("Reservation request sent! You will receive a confirmation email soon."),
      () => alert("Failed to send reservation request. Please try again.")
    );
  };


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
        
        <ConHero/>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 pt-28 px-10 md:px-20">

        <div>
          <div className=" flex items-center gap-3 text-[#D29A5A]">
                <div className="w-[50px] h-[2px] bg-[#D29A5A]"></div>
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

            {/* contact details  */}

            <div className=' grid grid-cols-1 md:grid-cols-2 pt-10 items-start bg-[#130F0C]'>
        {Details.map(({icon, text1,text2},i) => {
            return <div key={i} className='flex md:justify-center items-center mt-10  gap-5'>
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

        </div>

        <div className=" text-white  ">
          <div className="">
                <p className="text-4xl font-bold text-[#D29A5A] ">Your Details.</p>
                <p className="mt-2 text-[#D1C8BB]">Let us know how to get back to you</p>
            </div>

            <form onSubmit={handleSubmit} className="  mx-auto grid grid-cols-1 space-y-5 mt-5 ">
                <input type="text" className="border bg-inherit px-4 py-3 outline-none" name="name" placeholder="Your Name" value={reservation.name} onChange={handleChange} required />
                <input type="email" className="border bg-inherit px-4 py-3 outline-none" name="email" placeholder="Your Email" value={reservation.email} onChange={handleChange} required />
                <input type="phone" className="border bg-inherit px-4 py-3 outline-none" name="phone" placeholder="Your Number" value={reservation.phone} onChange={handleChange} required />
                <input type="phone" className="border bg-inherit px-4 py-3 outline-none" name="subject" placeholder="Your Subject" value={reservation.subject} onChange={handleChange} required />
                <div className="grid grid-cols-1 text-start">
                  <label htmlFor="reservation-date" className="mb-2 text-[#D1C8BB]">Select a date :</label>
                  <input id="reservation-date" type="date" className="border bg-white  px-4 py-3 outline-none white text-black" name="date" value={reservation.date} onChange={handleChange} required placeholder="Enter date"/>
                </div>
                <div className="grid grid-cols-1 ">
                  <label htmlFor="reservation-time" className="text-start mb-2 text-[#D1C8BB]">Select a time</label>
                  <input id="reservation-time" type="time" className="border bg-white text-black px-4 py-3 outline-none" name="time" value={reservation.time} onChange={handleChange} required placeholder="Enter time"/>
                </div>
                <Button type="submit" className="w-fit bg-[#D29A5A] hover:bg-transparent hover:border hover:text-white tracking-wider mx-auto">Contact Us</Button>
            </form>
        </div>
        </div>

        
    </>
  );
};

export default Contact;
