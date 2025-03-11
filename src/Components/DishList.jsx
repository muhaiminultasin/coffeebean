import React from 'react';
import { useNavigate } from 'react-router-dom';
import { dishes } from '../Data';
import PageHero from '../Components/PageHero';


const DishList = () => {

  const navigate = useNavigate();

  return (
    <>
   
      <div className='grid grid-cols-2 md:grid-cols-4 gap-5 px-10 md:px-20 pt-20 text-white'>
        {
          dishes.map(({id,name,images,price}) => {
            return <div key={id} id={id} onClick={() => navigate(`/dish/${id}`)} className='cursor-pointer'>
              <div className='overflow-hidden h-[70%]'>
                  <img src={images[0]} alt="food" className='hover:scale-110 h-full transition-all '/>
              </div>
              <div className='mt-2 space-y-3'>
                  <h1 className='text-lg font-medium'>{name}</h1>
                  <div className='flex justify-between items-center'>
                      <p className='text-white'>$ {price}</p>
                      
                  </div>
              </div>
          </div>
          })
        }
      </div>
    </>
  )
}

export default DishList
