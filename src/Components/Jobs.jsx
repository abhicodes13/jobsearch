import React from 'react'
import {BiTimeFive} from 'react-icons/bi'

const Jobs = () => {
  return (
    <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
        <div className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
        <span className='flex justify-between items-center gap-4'>
            <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>Web Developer</h1>
            <span className='flex items-center text-[#ccc] gap-1'>
                <BiTimeFive/>Now
            </span>
        </span>
        <h6 className="text-[#ccc]">Canada</h6>
        <p className="text-sm">Lorem ipsum,coeditcoedit dolocoedit rcoedit sit amet coedit sum, dolor sit amet coedit sum, dolor sit amet coedit</p>
        </div>

        <div className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
        <span className='flex justify-between items-center gap-4'>
            <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>UI/UX Developer</h1>
            <span className='flex items-center text-[#ccc] gap-1'>
                <BiTimeFive/>Now
            </span>
        </span>
        <h6 className="text-[#ccc]">USA</h6>
        <p className="text-sm"> amet coedit sum, dolor sit asum, dolor sum, dolor sitsitsum, dolor sitsum, dolor sitmet coedit</p>
        </div>

        <div className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
        <span className='flex justify-between items-center gap-4'>
            <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>Fullstack Developer</h1>
            <span className='flex items-center text-[#ccc] gap-1'>
                <BiTimeFive/>Now
            </span>
        </span>
        <h6 className="text-[#ccc]">USA</h6>
        <p className="text-sm">Lorem ipsum, dolor sit amet coedit sum, dolor sit amet coedit sum, dolor sit amet coedit</p>
        </div>

        <div className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
        <span className='flex justify-between items-center gap-4'>
            <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>Email Developer</h1>
            <span className='flex items-center text-[#ccc] gap-1'>
                <BiTimeFive/>Now
            </span>
        </span>
        <h6 className="text-[#ccc]">UK</h6>
        <p className="text-sm">Lorem ipsum, dolor sit amet coedit sum, dolor sit ametcoedit coedit coeditcoeditsum, dolor coeditsit amet coedit</p>
        </div>
    </div>
     
  )
}

export default Jobs
