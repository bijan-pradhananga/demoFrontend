import React from 'react'

const NavbarComponent2 = () => {
  return (
    <div className='hidden w-full md:flex justify-center items-center h-14 mb-1'>
       <ul className='h-full flex gap-8 md:text-lg'>
          <li className='h-full flex items-center border-b-2 border-transparent transition-colors duration-300 hover:border-blue-600 cursor-pointer'>Home</li>
          <li className='h-full flex items-center border-b-2 border-transparent transition-colors duration-300 hover:border-blue-600 cursor-pointer'>About</li>
          <li className='h-full flex items-center border-b-2 border-transparent transition-colors duration-300 hover:border-blue-600 cursor-pointer'>Products</li>
          <li className='h-full flex items-center border-b-2 border-transparent transition-colors duration-300 hover:border-blue-600 cursor-pointer'>Contact</li>
       </ul>
    </div>
  )
}

export default NavbarComponent2