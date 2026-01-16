import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-row sm:grid grid-col-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
        <div>
          <img src={assets.logo} className='w-32 mb-5' alt=""/>
          <p className='w-full text-gray-600 md:w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi beatae laborum accusamus, impedit, assumenda porro error numquam facere et aperiam dolor natus quaerat minus ea, sapiente esse dolorem. Sit!
          </p>
        </div>

        <div>
          <p className='mb-5 text-xl font-medium'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='mb-5 text-xl font-medium'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-234-565-2788</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>

        <div>
          <hr />
          <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com - All Right Reserved.</p>
        </div>

      </div>
    </div>
  )
}

export default Footer
