import React from 'react'

import {user,cart} from "../assets/index.js"


function Header() {
  return (
    <>
        <div className='w-full '>
            <div className='flex justify-between items-center w-full px-[72px] py-[24px] bg-black'>
                <div className='text-orange-400'>SIH</div>
            
                <div className='flex justify-evenly'>
                    <button className='text-orange-400 px-4 text-lg rounded-full hover:bg-slate-800 '>Destinations</button>
                    <button className='text-orange-400 px-4 text-lg rounded-full hover:bg-slate-800 '>Experiences</button>
                    <button className=' rounded-full p-3  hover:bg-slate-800 '><img className='size-8'src={user}/></button>
                   <button className='mx-2 rounded-full p-3 hover:bg-slate-800 '><img className='size-7'src={cart}/></button>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Header