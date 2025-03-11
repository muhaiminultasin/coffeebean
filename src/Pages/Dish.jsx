import React from 'react';
import DishList from '../Components/DishList';
import PageHero from '../Components/PageHero';

const Dish = () => {
  return (
    <>
        <PageHero title={"Dish"} desc={"Hello"}/>
        <DishList/>
    </>
  )
}

export default Dish;
