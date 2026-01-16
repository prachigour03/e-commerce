import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=''/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum quidem ad voluptas vitae eius laudantium aspernatur quasi amet officia iste sed distinctio maiores quam laborum explicabo tenetur, eligendi odit tempora.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quibusdam veniam provident cumque consectetur obcaecati, explicabo sit ducimus assumenda unde nam molestiae ipsam asperiores quia iusto omnis nesciunt. Nostrum, nulla? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perferendis cumque aut totam veritatis voluptatum quia delectus quisquam sapiente provident, nulla in alias dicta temporibus quaerat labore voluptatem molestiae harum?</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem est quo distinctio possimus quaerat ad eum consequuntur quos doloribus sunt, unde, iste architecto. Ducimus, odit commodi molestias debitis sed veritatis!</p>
      </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py:20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad doloribus similique, voluptates quae quo ipsam tempora consequuntur placeat voluptatum, molestiae debitis rem eius porro labore nemo distinctio nulla commodi nostrum?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py:20 flex flex-col gap-5'>
          <b>Conven:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad doloribus similique, voluptates quae quo ipsam tempora consequuntur placeat voluptatum, molestiae debitis rem eius porro labore nemo distinctio nulla commodi nostrum?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py:20 flex flex-col gap-5'>
          <b>Exceptional Customer Servise:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad doloribus similique, voluptates quae quo ipsam tempora consequuntur placeat voluptatum, molestiae debitis rem eius porro labore nemo distinctio nulla commodi nostrum?</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
