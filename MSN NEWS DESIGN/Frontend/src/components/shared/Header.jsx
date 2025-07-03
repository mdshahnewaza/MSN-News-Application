import React from 'react'
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const Header = () => {
  return (
    <div className='header'>
      <div className="shadow p-4 sticky flex items-center justify-between">
        <div className="logo w-[80px]">
          <Link to={'/'}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/2024_new_msn_logo.svg/800px-2024_new_msn_logo.svg.png" alt="" /></Link>
        </div>

        <form className="input ml-6 bg-[#f1f1f1] w-[60%] md:w-[40%] py-2 px-4 rounded-lg flex items-center">
          <input type="text" placeholder='Search...' className='w-full outline-none text-[16px] font-[500] text-[#333]'/>

          <button className='text-[#333] cursor-pointer'><IoSearch className='text-[18px]'/></button>
        </form>

        <ul className='flex items-center gap-4'>
          <Link to={'/'}>
          <li className='hidden lg:inline text-slate-700 hover:underline text-[18px] font-[400]'>Home</li>
          </Link>

          <Link to={'/about'}>
          <li className='hidden lg:inline text-slate-700 hover:underline text-[18px] font-[400]'>About</li>
          </Link>

          <Link to={'/news'}>
          <li className='hidden lg:inline text-slate-700 hover:underline text-[18px] font-[400]'>News Articles</li>
          </Link>
        </ul>

        <Link to={'/sing-in'}>
        <Button>Sing In</Button>
        </Link>
      </div>

    </div>
  )
}

export default Header