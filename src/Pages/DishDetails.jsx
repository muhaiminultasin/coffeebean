import React from 'react';
import { useParams } from 'react-router-dom';
import { dishes } from '../Data';
import CustomBtn from '../common/CustomBtn';



const DishDetails = () => {

  const {id} = useParams();
  const dish = dishes.find((d) => d.id === id);

  if(!dish) {
    return <h1 className='text-xl py-30'>Page not found <a href="#">Home</a></h1>
  }


  return (
    <>
      <div className="flex flex-col-reverse md:grid md:grid-cols-2  gap-10 md:gap-5 pt-32 px-10 md:px-20">
        <div className=''>
          <div className=' text-white'>
            <h1 className=' text-4xl font-semibold'>{dish.name}</h1>
            <p className='mt-5 font-medium'>{dish.description}</p>
            <p className='mt-5'><span className='font-medium'>Ingredients : </span> { dish.ingredients}</p>
            <p className='mt-5'> <span className='font-medium'>Nutritions : </span> { dish.nutritionalInfo}</p>
            <p className='mt-5'> <span className='font-medium'>Price : </span> $ {dish.price}</p>
            <CustomBtn text={"Order Now"} btnClass="mt-10"/>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-5'>
          {
            dish.images.map((img,index) => {
              return <div>
                <img key={index} src={img} alt="dish.name"className='w-full h-full mx-auto' />
              </div>
            })
          }
        </div>
      </div>
    </>
  )
}

export default DishDetails
