import React from 'react';
import DishList from '../Components/DishList';
import PageHero from '../Components/PageHero';

const Dish = () => {
  return (
    <>
        <PageHero title={"Dish"} desc={"Explore our carefully crafted dishes, where flavors come to life in every bite. From mouthwatering appetizers to indulgent main courses and delightful desserts, each dish is prepared with the finest ingredients to satisfy your cravings. Discover your next favorite meal today!"}/>
        <DishList/>
    </>
  )
}

export default Dish;
