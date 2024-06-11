import React from 'react'
import {  useDispatch } from 'react-redux'
import { menu } from '../utils/sidebarslice';
function Header() {
  const dispatch=useDispatch();
  const handlesidebar=()=>{
    dispatch(menu())
  }
 
  return (
    <div className=' flex justify-between bg-black p-3  '>
      <div className=' flex   '>
       <img className=' w-10 mx-6  ' onClick={handlesidebar} src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/menu-512.png" alt="Menu-icon" />
       <img  className='w-14   object-cover' src='https://cdn-icons-png.freepik.com/256/14072/14072067.png?semt=ais_hybrid' alt='youtube-icon' />
       </div>
       <div className=''>
        <input className=' w-[600px] px-2 py-2 border rounded-2xl mt-3 bg-gray-700' type='text' placeholder='Search' />
       </div>
       <div className=' mx-10 '>
        <button className=' w-24  mt-3 p-2 bg-[#0077b6]  rounded-lg'>Sign out</button>
       </div>
    </div>
  )
}

export default Header