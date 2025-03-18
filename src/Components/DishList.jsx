import React from "react";
import { useNavigate } from "react-router-dom";
import { dishes } from "../Data";

const DishList = () => {
  // const categories = ["Appetizer", "Main", "Dessert"];

  const Appetizer = dishes.filter((dish) => dish.category === "Appetizer");
  const Main = dishes.filter((dish) => dish.category === "Main");
  const Dessert = dishes.filter((dish) => dish.category === "Dessert");

  const navigate = useNavigate();

  return (
    <>
    <h1 className="text-5xl py-10 text-center text-white font-bold">Appetizer</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-10 md:px-20 pt-10 text-white">
        {Appetizer.map(({ id, name, images, price }) => {
          return (
            <div
              key={id}
              id={id}
              onClick={() => navigate(`/dish/${id}`)}
              className="cursor-pointer"
            >
              
              <div className="overflow-hidden h-[70%]">
                <img
                  src={images[0]}
                  alt="food"
                  className="hover:scale-110 h-full transition-all "
                />
              </div>
              <div className="mt-2 space-y-3">
                <h1 className="text-lg font-medium">{name}</h1>
                <div className="flex justify-between items-center">
                  <p className="text-white">$ {price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    <h1 className="text-5xl py-10 text-center text-white font-bold">Main Dish</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-10 md:px-20 pt-10 text-white">
        {Main.map(({ id, name, images, price }) => {
          return (
            <div
              key={id}
              id={id}
              onClick={() => navigate(`/dish/${id}`)}
              className="cursor-pointer"
            >
              
              <div className="overflow-hidden h-[70%]">
                <img
                  src={images[0]}
                  alt="food"
                  className="hover:scale-110 h-full transition-all "
                />
              </div>
              <div className="mt-2 space-y-3">
                <h1 className="text-lg font-medium">{name}</h1>
                <div className="flex justify-between items-center">
                  <p className="text-white">$ {price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    <h1 className="text-5xl py-10 text-center text-white font-bold">Dessert</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-10 md:px-20 pt-10 text-white">
        {Dessert.map(({ id, name, images, price }) => {
          return (
            <div
              key={id}
              id={id}
              onClick={() => navigate(`/dish/${id}`)}
              className="cursor-pointer"
            >
              
              <div className="overflow-hidden h-[70%]">
                <img
                  src={images[0]}
                  alt="food"
                  className="hover:scale-110 h-full transition-all "
                />
              </div>
              <div className="mt-2 space-y-3">
                <h1 className="text-lg font-medium">{name}</h1>
                <div className="flex justify-between items-center">
                  <p className="text-white">$ {price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DishList;
