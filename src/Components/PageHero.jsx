import React from 'react';

const PageHero = ({text}) => {
  return (
    <>
        <div className='bg-[url("./assets/Images/contactBghero.webp")] bg-no-repeat bg-cover h-[50vh] md:h-screen flex justify-center items-center'>
            <div className="absolute inset-0 bg-black bg-opacity-50 h-[50vh] md:h-screen"></div>
            
            <div className='relative z-10 text-white '>
                <h1 className=' text-[50px] md:text-[80px] tracking-wider text-center font-bold text-white'>{text} </h1>
            </div>
        </div> 
    </>
  )
}

export default PageHero;
