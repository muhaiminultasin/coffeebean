import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@heroui/react";

const Contact = () => {
  const [reservation, setReservation] = useState({ name: "", email: "", phone: "" , date: "", time: "" });

  const handleChange = (e) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "your_service_id", // Replace with your EmailJS service ID
      "your_template_id", // Replace with your EmailJS template ID
      reservation,
      "your_user_id" // Replace with your EmailJS user/public key
    ).then(
      () => alert("Reservation request sent! You will receive a confirmation email soon."),
      () => alert("Failed to send reservation request. Please try again.")
    );
  };

  return (
    <>
        <div className="bg-[#130F0C] text-white text-center px-10">

            <div className="pt-28">
                <p className="text-4xl font-medium text-[#D29A5A]">Welcome to our Restaurant</p>
                <p className="mt-2">Indulge in Exceptional Flavors and Unforgettable Dining Experiences</p>
            </div>

            <form onSubmit={handleSubmit} className=" md:w-3/5 mx-auto grid grid-cols-1 space-y-5 mt-5 ">
                <input type="text" className="border bg-inherit px-4 py-3 outline-none" name="name" placeholder="Your Name" value={reservation.name} onChange={handleChange} required />
                <input type="email" className="border bg-inherit px-4 py-3 outline-none" name="email" placeholder="Your Email" value={reservation.email} onChange={handleChange} required />
                <input type="phone" className="border bg-inherit px-4 py-3 outline-none" name="phone" placeholder="Your Number" value={reservation.phone} onChange={handleChange} required />
                <div className="grid grid-cols-1 text-start">
                  <label htmlFor="reservation-date" className="mb-2 text-[#D1C8BB]">Select a date :</label>
                  <input id="reservation-date" type="date" className="border bg-white  px-4 py-3 outline-none white text-black" name="date" value={reservation.date} onChange={handleChange} required placeholder="Enter date"/>
                </div>
                <div className="grid grid-cols-1 ">
                  <label htmlFor="reservation-time" className="text-start mb-2 text-[#D1C8BB]">Select a time</label>
                  <input id="reservation-time" type="time" className="border bg-white text-black px-4 py-3 outline-none" name="time" value={reservation.time} onChange={handleChange} required placeholder="Enter time"/>
                </div>
                <Button type="submit" className="font-medium w-fit mx-auto bg-[#D29A5A]">Reserve Now</Button>
            </form>
        </div>
    </>
  );
};

export default Contact;
