import React, { useState } from 'react'
import { Footer } from '../sections'
import { shoe4 } from '../assets/images'

const ShoppingBag = () => {
    const [quantity,setQuantity] = useState(1);
  return (
    <div>
        <div className='p-10 bg-black max-md:bg-white flex flex-col justify-center items-center'>
            <p className='mb-10 font-montserrat font-bold'>Basket</p>
            <div className='flex items-start gap-6 font-montserrat'>
                <div>
                    <img className='w-[120px]' src={shoe4}/>
                </div>
                <div>
                    <p className='text-[18px] text-coral-red font-bold'>$100.00</p>
                    <div>
                        <p className='font-bold text-[20px]'>Air Jordan 1</p>
                        <p className='text-gray-400 '>Men's Shoes</p>
                        <p className='text-gray-400  text-xl  '>Size  
                            <select className='text-base  '>
                                <option>EU 12</option>
                                <option>EU 12.5</option>
                                <option>EU 13</option>
                            </select>

                            <div className='text-base'> Quantity:  
                                <button onClick={() => quantity > 1 && setQuantity(quantity - 1) } className='border max-sm:px-1 mx-2 px-2'> - </button>
                                <input style={{WebkitAppearance:'none',margin:0}} className='max-sm:w-4 w-8 text-center border-none ' type='text' value={quantity}
                                onChange={(e) => {
                                    (Number.isInteger(+e.target.value) === true && +e.target.value >= 1 && +e.target.value <= 10 || e.target.value == '') && setQuantity(+e.target.value)
                                } } />
                                <button onClick={() => quantity < 10 && setQuantity(quantity + 1) } className='border mx-2 px-2 max-sm:px-1'> + </button>
                            </div>
                        </p>
                    </div>
                </div>
            </div>

        </div>
        <section className=' bg-black padding-x padding-t pb-8'>
            <Footer />
        </section>
    </div>
  )
}

export default ShoppingBag