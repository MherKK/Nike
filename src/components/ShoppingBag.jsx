import React, { useState } from 'react'
import { Footer } from '../sections'
import { shoe4 } from '../assets/images'

const ShoppingBag = () => {
    let quantity = [1,2,3,4,5,6,7,8,9,10];
  return (
    <>
    <div className='flex flex-col items-center'>
        <div className='p-10 min-[1000px]:w-[70%] min-[1000px]:bg-black flex flex-col justify-center items-center'>
            <p className='mb-10 font-montserrat font-bold'>Basket</p>
            <div className='flex items-start gap-6 font-montserrat'>
                <div>
                    <img className='w-[120px]' src={shoe4}/>
                </div>
                <div className='flex flex-row-reverse justify-between max-sm:flex-col'>
                    <p className='text-[18px] text-coral-red font-bold'>$100.00</p>
                    <div className='flex flex-col gap-2'>
                        <p className='font-bold text-[20px]'>Air Jordan 1</p>
                        <p className='text-gray-400 '>Men's Shoes</p>
                        <div className='text-gray-400 flex items-start gap-2 max-sm:flex-col '>  
                            <span className='text-base  max-sm:text-[12px]'>Size 
                                <select className='max-sm:text-[12px] text-base'>
                                    <option>EU 12</option>
                                    <option>EU 12.5</option>
                                    <option>EU 13</option>
                                </select>
                            </span>
                            <span className='text-base max-sm:text-[12px]'> Quantity  
                            <select className='max-sm:text-[12px] text-base'>
                                {quantity.map((qnt) => {
                                    return <option key={qnt}>{qnt}</option>
                                })}
                            </select>
                            </span>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    </div>
    <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
    </section>
    </>
  )
}

export default ShoppingBag