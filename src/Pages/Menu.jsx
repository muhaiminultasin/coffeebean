import React from 'react'
import PageHero from '../Components/PageHero'

const Menu = () => {

  const Appetizer = [
    { name: 'Bruschetta', price: '$8' },
    { name: 'Garlic Bread', price: '$5' },
    { name: 'Stuffed Mushrooms', price: '$10' },
    { name: 'Bruschetta', price: '$8' },
    { name: 'Garlic Bread', price: '$5' },
    { name: 'Stuffed Mushrooms', price: '$10' },
    { name: 'Bruschetta', price: '$8' },
    { name: 'Garlic Bread', price: '$5' },
    { name: 'Stuffed Mushrooms', price: '$10' },
    { name: 'Bruschetta', price: '$8' },
    { name: 'Garlic Bread', price: '$5' },
    { name: 'Stuffed Mushrooms', price: '$10' },
  ];

  return (
    <>
      <PageHero title={"Our Menu"} desc={"Welcome to our menu, where each dish offers a unique story and experience. Our chefs use fresh, locally sourced ingredients to create a diverse selection of mouthwatering options, blending culinary tradition with modern flair.We cater to every palate and dietary need, with choices for gluten-free, vegetarian, and vegan diets, ensuring satisfying meals for all. Celebrating the cooking process, we focus on quality and let our ingredients shine. Each meal is crafted with love and passion, nourishing both body and soul. Enjoy the comforting aromas, textures, and warmth of our flavors."}/>

      <div className='px-10 md:px-20 pt-40 space-y-20'>
        <div className="Appetizer text-white">
          <h1 className="text-5xl 2xl:text-[4rem] font-bold text-center">Appetizer</h1>
          <div className="flex w-fit mx-auto mt-5 gap-5 justify-center items-center">
          <div className="w-[50px] 2xl:w-[100px] h-[2px] 2xl:h-[8px] bg-primary"></div>
          <p className="text-primary text-2xl 2xl:text-[5rem]">*</p>
          <div className="w-[50px] 2xl:w-[100px] h-[2px] 2xl:h-[8px] bg-primary"></div>
        </div>

          <div className="menu grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
          {
                Appetizer.map(({name, price},i) => {
                    return <div key={i} className="flex justify-between items-center  border-b  border-primary border-b'>
                    ">
                            <p className="text-large 2xl:text-[2.5rem] font-medium pb-3  ">{name}</p>
                            <p className="text-primary pb-3 font-medium 2xl:text-[2.5rem]">{price}</p>
                    </div>
                })
            }
          </div>
        </div>
        <div className="Appetizer text-white">
          <h1 className="text-5xl 2xl:text-[4rem] font-bold text-center">Main Dish</h1>
          <div className="flex w-fit mx-auto mt-5 gap-5 justify-center items-center">
          <div className="w-[50px] 2xl:w-[100px] h-[2px] 2xl:h-[8px] bg-primary"></div>
          <p className="text-primary text-2xl 2xl:text-[5rem]">*</p>
          <div className="w-[50px] 2xl:w-[100px] h-[2px] 2xl:h-[8px] bg-primary"></div>
        </div>

          <div className="menu grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
          {
                Appetizer.map(({name, price},i) => {
                    return <div key={i} className="flex justify-between items-center  border-b  border-primary border-b'>
                    ">
                            <p className="text-large 2xl:text-[2.5rem] font-medium  ">{name}</p>
                            <p className="text-primary pb-3text-large 2xl:text-[2.5rem] font-medium pb-3 ">{price}</p>
                    </div>
                })
            }
          </div>
        </div>
        <div className="Appetizer text-white">
          <h1 className="text-5xl 2xl:text-[4rem] font-bold text-center">Dessert</h1>
          <div className="flex w-fit mx-auto mt-5 gap-5 justify-center items-center">
          <div className="w-[50px] 2xl:w-[100px] h-[2px] 2xl:h-[8px] bg-primary"></div>
          <p className="text-primary text-2xl 2xl:text-[5rem]">*</p>
          <div className="w-[50px] 2xl:w-[100px] h-[2px] 2xl:h-[8px] bg-primary"></div>
        </div>

          <div className="menu grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
          {
                Appetizer.map(({name, price},i) => {
                    return <div key={i} className="flex justify-between items-center  border-b  border-primary border-b'>
                    ">
                            <p className="text-large 2xl:text-[2.5rem] font-medium pb-3 ">{name}</p>
                            <p className="text-primary pb-3 font-medium 2xl:text-[2.5rem]">{price}</p>
                    </div>
                })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu
