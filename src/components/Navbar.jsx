import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (

     <div className="flex flex-row items-center justify-between p-4 bg-gray-900 text-[#2b9ce8]/90">
      
      <h2 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        PasteBin
      </h2>

    <div className='flex gap-6'>
   
   <NavLink to='/'  className={({isActive})=> isActive ? "active": ""}>Home</NavLink>
   <NavLink to='/pastes' className={({isActive})=> isActive ? "active":""}>ListofPaste</NavLink>

    </div>
    </div>
  )
}

export default Navbar





