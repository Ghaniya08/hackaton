import Image from 'next/image'
import React from 'react'
import chefs1 from "../../../public/chef1.png"
import chefs2 from "../../../public/chef2.png"
import chefs3 from "../../../public/chef3.png"
import chefs4 from "../../../public/chef4.png"
const Chefs = () => {
  return (
    <div>
       <div className='lg:mt-[100px] lg:px-[100px] px-6'>
    <h1 className='text-bordercoloryello text-center font-greatVibes lg:text-[32px] text-[30px] leading-[40px] font-medium'>Our chefs</h1>
    <h1 className='font-helvetica  font-bold text-center lg:text-[40px] text-[30px] leading-[45px] text-whitetext'><span className='text-bordercoloryello'>Ch</span>oose Food Iteam</h1>
    <div className='flex lg:flex-row flex-col gap-3 px-[100px] pt-[30px]'>
    <Image src={chefs1} alt="category" className='lg:w-[305px] lg:h-[248px] rounded-[6px]' />
    <Image src={chefs2} alt="category" className='lg:w-[305px] lg:h-[248px] rounded-[6px]'/>
    <Image src={chefs3} alt="category" className='lg:w-[305px] lg:h-[248px] rounded-[6px]'/>
    <Image src={chefs4} alt="category" className='lg:w-[305px] lg:h-[248px] rounded-[6px]'/>
    </div>
    </div>
    </div>
  )
}

export default Chefs
