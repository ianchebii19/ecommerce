import React from 'react'
import Logo from './logo'
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom'; 

const Hero = () => {
  return (
    <div className="w-full top-0 left-0 py-4 border-b bg-white z-10 shadow-lg">
        <div className=" container mx-auto max-w-[1500px] px-6 ">
            <div className="flex justify-between items-center">
                <Logo/>
                <div className="hidden lg:flex items-center border border-gray-300 p-2 rounded-full">
                 <input type="text" placeholder='search products here...' className='outline-none px-3' />
                 <IoSearch className="font-semibold text-2xl text-blue-500"/>
                </div>
                <div className='flex items-center '>

              
                <div className='border border-gray-400 rounded-full p-1 cursor-pointer'>
                  <FaUser className=' text-2xl  text-gray-600'/>
                </div>
                <div className='relative ml-4  text-gray-600 cursor-pointer'>
                  <FaShoppingCart className='text-2xl' />
                  <p className='bg-red-500 w-5 h-6 flex items-center text-white absolute p-1 text-xl rounded-full -top-3 -right-3'>0</p>
                </div>
                <div className='flex items-center mx-3 text-xl'>
                <Link to="login">
                <button className=' text-white bg-blue-500 px-3 py-1 rounded-xl mx-1 hover:bg-blue-400'>Login</button>
                
                </Link>
            
                </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Hero