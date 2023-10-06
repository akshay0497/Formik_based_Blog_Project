import React from 'react'
import img1 from '../../Asset/Images/Header/blog.png'
import { Link, NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <div className='bg-gray-500/80 shadow-lg flex items-center justify-between p-5 sticky '>
        <div >
      <img src={img1} className='h-10' />
        </div>
        <div className='flex justify-between items-center mx-5 gap-10'>
            <Link to="/logup" className='text-white font-medium text-lg'>Sign up</Link>
            <button type='submit' className='mx-5 bg-[#bc382e] h-8 w-36 rounded-lg text-white'>Create Your Blog</button>
        </div> 
    </div>
  )
}

export default Header
