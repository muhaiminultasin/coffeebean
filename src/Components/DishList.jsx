import React from 'react';
import food1 from '../../public/food/food1.jpeg'
import CustomBtn from '../common/CustomBtn';


const DishList = () => {
  return (
    <>
      <div id='id' className='grid grid-cols-2 md:grid-cols-4 gap-5 py-20 px-10 md:px-20 text-white'>
        <div>
            <div className='overflow-hidden'>
                <img src={food1} alt="food" className='hover:scale-110 transition-all '/>
            </div>
            <div className='mt-2 space-y-3'>
                <h1 className='text-lg font-medium'>Grassfed beef heart</h1>
                <div className='flex justify-between items-center'>
                    <p>$30</p>
                    <CustomBtn text={"Order"} btnClass={"w-[20px] h-[20px] text-[12px]"}/>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default DishList
