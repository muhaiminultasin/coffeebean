import React from 'react';

const PageHero = ({title, desc}) => {
  return (
    <>
        <div className='bg-[url("./assets/Images/contactBghero.webp")] bg-no-repeat bg-cover min-h-[50vh] md:h-screen flex justify-center items-center'>
            <div className="absolute inset-0 bg-black bg-opacity-50 h-[50vh] md:h-screen"></div>
            
            <div className='relative z-10 text-white pt-40 pb-24'>
                <h1 className=' text-[50px] md:text-[80px] tracking-wider text-center font-bold text-white leading-tight md:leading-none'>{title} </h1>
                <p className='w-[90%] md:w-[60%] text-center mx-auto font-medium'>{desc}</p>
            </div>
        </div> 
    </>
  )
}

export default PageHero;
