import React from 'react'
import {BiSolidSend} from 'react-icons/bi'

const Value = () => {
  return (
    <div className=' flex items-center justify-between w-[100%] h-[150px] bg-slate-100 rounded-[10px] p-[40px]'>
      <div>
      <h1 className="text-blueColor font-bold text-[25px]">Ready to switch a career?</h1>
      <h1 className=' text-[18px] font-semibold'>Let's get started</h1>
      </div>
      <button className=' flex items-center justify-evenly w-[180px] h-[50px]  text-blueColor rounded-[20px] border-2 border-blueColor p-1 hover:bg-white hover:text-blueColor font-normal text-[16px]'>Get Started <BiSolidSend/></button> 
    </div>

  )
}

export default Value