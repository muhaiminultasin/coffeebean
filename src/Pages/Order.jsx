import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@heroui/react";
import PageHero from "../Components/PageHero";
import { IoMdBook } from "react-icons/io";
import { LuPhone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { GoClock } from "react-icons/go";
import { useLocation } from "react-router-dom";

const Order = () => {
  const location = useLocation();
  const { dish, price, quantity } = location.state || {};

  const [order, setOrder] = useState({
    name: "",
    quantity: 1,
    price: "",
    email: "",
    phone: "",
    address: "",
    dish: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    if (dish) {
      setOrder((prev) => ({
        ...prev,
        dish: typeof dish === "string" ? dish : dish.name || "",
        price: dish.price,
      }));
    }
  }, [dish, price]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setOrder((prev) => ({
      ...prev,
      [name]:
        type === "number"
          ? value === ""
            ? ""
            : Math.max(1, Number(value))
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_ipfiohq", "template_qmh290u", order, "s3ImfKNeHWXnM9-Rm")
      .then(
        () =>
          alert(
            "Order request sent! You will receive a confirmation email soon."
          ),
        () => {
          alert("Order request sent successfully!");
        }
      );
  };

  const Details = [
    {
      icon: <IoMdBook className="text-[40px] text-primary" />,
      text1: "Sovy Restaurant, Jl. Raya",
      text2: "Canggu, Badung, Bali.",
    },
    {
      icon: <LuPhone className="text-[40px] text-primary" />,
      text1: "(+62) 34 53 45 334",
      text2: "(+62) 34 53 45 334",
    },
    {
      icon: <TfiEmail className="text-[40px] text-primary" />,
      text1: "Reservation.com",
      text2: "Books.com",
    },
    {
      icon: <GoClock className="text-[40px] text-primary" />,
      text1: "Open 04:00 pm WITA",
      text2: "Closed 01:00 am WITA",
    },
  ];

  return (
    <>
      <PageHero
        title={"Order Your Favorite Dish"}
        desc={
          "Indulge in a mouthwatering meal delivered directly to your doorstep! Simply complete the form below with accurate information, and let us handle the rest. Treat yourself—you deserve it!"
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 pt-28 px-10 md:px-20">
        <div>
          <div className=" flex items-center gap-3 text-primary">
            <div className="w-[50px] h-[2px] bg-primary"></div>
            <p className="font-semibold ">Order</p>
          </div>
          <h1 className="text-white font-bold text-start text-5xl mt-5">
            Place your order now
          </h1>
          <p className="text-secondary mt-5">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            quis commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus
            cume. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem In.
          </p>

          {/* contact details  */}

          <div className=" grid grid-cols-1 md:grid-cols-2 pt-10 items-start bg-[#130F0C]">
            {Details.map(({ icon, text1, text2 }, i) => {
              return (
                <div
                  key={i}
                  className="flex md:justify-center items-center mt-10  gap-5"
                >
                  <div>{icon}</div>
                  <div className="text-secondary text-sm">
                    <p>{text1}</p>
                    <p>{text2}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className=" text-white  ">
          <div className="">
            <p className="text-4xl font-bold text-primary ">Your Details.</p>
            <p className="mt-2 text-secondary">
              Let us know how to get back to you
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full mx-auto grid grid-cols-1 space-y-5 mt-5"
          >
            {/* Dish Name */}
            <div className="flex items-center">
              <p className="w-full bg-inherit px-4 py-1 min-h-8 outline-none text-lg font-medium border">
                {order.dish}
              </p>
            </div>

            {/* Price and Quantity */}
            <div className="flex gap-5">
              <div className="flex flex-col w-full">
                <p className="text-secondary text-sm">Price </p>
                <p className=" bg-inherit px-4 py-1 mt-4 flex gap-2 border w-full">
                  $ {`${order.price * order.quantity}`}
                </p>
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="quantity" className="text-secondary text-sm">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={dish ? order.quantity : 0}
                  onChange={handleChange}
                  className="w-full bg-inherit px-4 py-1 mt-4 outline-none border"
                />
              </div>
            </div>

            {/* Name */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-secondary text-sm">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="border bg-inherit px-4 py-1 outline-none mt-4"
                name="name"
                placeholder="Your Name"
                value={order.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-secondary text-sm">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="border bg-inherit px-2 py-1 outline-none mt-4"
                name="email"
                placeholder="Your Email"
                value={order.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-secondary text-sm">
                Your Number
              </label>
              <input
                type="phone"
                id="phone"
                className="border bg-inherit px-4 py-1 outline-none mt-4"
                name="phone"
                placeholder="Your Number"
                value={order.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Address */}
            <div className="flex flex-col">
              <label htmlFor="address" className="text-secondary text-sm">
                Your Address
              </label>
              <input
                type="text"
                id="address"
                className="border bg-inherit px-4 py-1 outline-none mt-4"
                name="address"
                placeholder="Your Address"
                value={order.address}
                onChange={handleChange}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-fit bg-primary hover:bg-transparent hover:border hover:text-white tracking-wider mx-auto"
            >
              Order Now
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Order;
