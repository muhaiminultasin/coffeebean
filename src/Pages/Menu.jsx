import React from 'react'
import PageHero from '../Components/PageHero'

const Menu = () => {

  const Appetizer = [
    {
      name: "Pork Tenderloin Marinated In Yogurt",
      price: "$25",
    },
    {
      name: "Pork Tenderloin Marinated In Yogurt",
      price: "$25",
    },
    {
      name: "Pork Tenderloin Marinated In Yogurt",
      price: "$25",
    },
    {
      name: "Pork Tenderloin Marinated In Yogurt",
      price: "$25",
    },
    {
      name: "Pork Tenderloin Marinated In Yogurt",
      price: "$25",
    },
    {
      name: "Pork Tenderloin Marinated In Yogurt",
      price: "$25",
    },
    {
      name: "Pork Tenderloin Marinated In Yogurt",
      price: "$25",
    },
    {
      name: "Pork Tenderloin Marinated In Yogurt",
      price: "$25",
    },
    {
      name: "Pork Tenderloin Marinated In Yogurt",
      price: "$25",
    },
    {
      name: "Pork Tenderloin Marinated In Yogurt",
      price: "$25",
    },
    {
      name: "Pork Tenderloin Marinated In Yogurt",
      price: "$25",
    },
  ]

  return (
    <>
      <PageHero title={"Our Menu"} desc={"Welcome to our menu, where each dish offers a unique story and experience. Our chefs use fresh, locally sourced ingredients to create a diverse selection of mouthwatering options, blending culinary tradition with modern flair.We cater to every palate and dietary need, with choices for gluten-free, vegetarian, and vegan diets, ensuring satisfying meals for all. Celebrating the cooking process, we focus on quality and let our ingredients shine. Each meal is crafted with love and passion, nourishing both body and soul. Enjoy the comforting aromas, textures, and warmth of our flavors."}/>

      <div className='px-10 md:px-20 pt-40 space-y-20'>
        <div className="Appetizer text-white">
          <h1 className="text-5xl font-bold text-center">Appetizer</h1>
          <div className="flex w-fit mx-auto mt-5 gap-5 justify-center items-center">
            <div className="w-[50px] h-[2px] bg-[#D29A5A]"></div>
            <p className="text-[#D29A5A] text-2xl">*</p>
            <div className="w-[50px] h-[2px] bg-[#D29A5A]"></div>
          </div>

          <div className="menu grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
          {
                Appetizer.map(({name, price},i) => {
                    return <div key={i} className="flex justify-between items-center  border-b  border-[#D29A5A] border-b'
                    ">
                            <p className="text-large font-medium pb-3 ">{name}</p>
                            <p className="text-[#D29A5A] pb-3">{price}</p>
                    </div>
                })
            }
          </div>
        </div>
        <div className="Appetizer text-white">
          <h1 className="text-5xl font-bold text-center">Main Dish</h1>
          <div className="flex w-fit mx-auto mt-5 gap-5 justify-center items-center">
            <div className="w-[50px] h-[2px] bg-[#D29A5A]"></div>
            <p className="text-[#D29A5A] text-2xl">*</p>
            <div className="w-[50px] h-[2px] bg-[#D29A5A]"></div>
          </div>

          <div className="menu grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
          {
                Appetizer.map(({name, price},i) => {
                    return <div key={i} className="flex justify-between items-center  border-b  border-[#D29A5A] border-b'
                    ">
                            <p className="text-large font-medium pb-3 ">{name}</p>
                            <p className="text-[#D29A5A] pb-3">{price}</p>
                    </div>
                })
            }
          </div>
        </div>
        <div className="Appetizer text-white">
          <h1 className="text-5xl font-bold text-center">Dessert</h1>
          <div className="flex w-fit mx-auto mt-5 gap-5 justify-center items-center">
            <div className="w-[50px] h-[2px] bg-[#D29A5A]"></div>
            <p className="text-[#D29A5A] text-2xl">*</p>
            <div className="w-[50px] h-[2px] bg-[#D29A5A]"></div>
          </div>

          <div className="menu grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
          {
                Appetizer.map(({name, price},i) => {
                    return <div key={i} className="flex justify-between items-center  border-b  border-[#D29A5A] border-b'
                    ">
                            <p className="text-large font-medium pb-3 ">{name}</p>
                            <p className="text-[#D29A5A] pb-3">{price}</p>
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
