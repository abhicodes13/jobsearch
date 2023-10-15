import React from 'react'
import {BiSolidSend} from 'react-icons/bi'

const Value = () => {
  return (
    <div className=' flex items-center justify-between w-[100%] h-[150px] bg-slate-100 rounded-[10px] p-[40px]'>
      <h1 className="text-blueColor font-bold text-[25px]">Ready for your job hunt?</h1>
      <button className=' flex items-center justify-evenly w-[200px] h-[50px]  text-white rounded-[20px] bg-blueColor p-1 hover:bg-white hover:text-blueColor font-normal text-[18px]'>Apply Now <BiSolidSend/></button> 
    </div>
  )
}

export default Value