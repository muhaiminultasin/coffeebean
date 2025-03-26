import React from 'react'

const Footer = () => {

  const socialList = [
    {
      name:"Facebook",
      link:"",
    },
    {
      name:"Twitter",
      link:"",
    },
    {
      name:"Instagram",
      link:"",
    },
    {
      name:"Trip Advisory",
      link:"",
    }
  ]

  return (
    <>
      <div className="py-20 px-10 text-center text-white ">
        <h1 className='text-4xl 2xl:text-[5rem] font-medium'>The Coffee Bean</h1>
        <ul className='flex justify-center gap-2 md:gap-10 mt-5 2xl:mt-14' >
          {socialList.map(({name,link},i) => {
            return <li key={i} className='text-primary text-sm lg:text-lg cursor-pointer 2xl:text-[2rem]'><a href={link} target='_blank'>{name}</a></li>
          })}
        </ul>
      </div>
    </>
  )
}

export default Footer
