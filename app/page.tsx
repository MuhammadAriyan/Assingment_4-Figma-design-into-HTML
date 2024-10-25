import React from 'react'
import '@/app/globals.css'
import Link from 'next/link'
import Image from 'next/image'
const page = () => {
  return (
    <main className=' h-auto w-full overflow-hidden'>
      <nav>
        <ul>
          <li id='WorksLi'><Link href={''}>Works</Link></li>
          <li id='BlogLi'><Link href={''}>Blog</Link></li>
          <li id='ContactLi'><Link href={''}>Contact</Link></li>
        </ul>
      </nav>
      <section className="  flex justify-around items-center h-[817px]" >
        <div className=' p-2 w-[541px]'>
        <h1 className='hHero text-4xl '>Hi, I am John,</h1>
        <h1 className=' hHero text-4xl pb-4 '>Creative Technologist</h1>
        <p className=' text-lg pb-10 pt-4'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <button className=' mt-4 mb-7 p-2 text-white bg-red-400 shadow-sm shadow-black'>Download Resume</button>
        </div>
        <div>
          <Image className='' width={242} height={249} alt='hero' src={'/hero.png'}/>
        </div>
      </section>
      <section className='recent-post-section p-3'>
        <div className=' text-lg m-4 w-[67%] mx-auto justify-center items-center flex'>
        <div className=' w-full flex justify-between items-center'>
        <h4 className='font-black'>Recent Post</h4>
        <span className=' text-red-400'>View All</span>
        </div>
        </div>
        <div className='flex justify-center items-center'>
        <div className='card mr-5 '>
          <h1 className=' font-semibold text-2xl mb-3'>Making a design system from scratch</h1>
          <div className=' text-gray-500'>
          <span className=' text-center card-sub '>12 Feb 2020</span>
          <span className=' border-gray-400 text-xs  m-4 border-[1px]'></span>
          <span className=' card-sub text-right'>Design , Pattern</span>
          </div>
          <p className='mt-6 text-gray-600 '>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
        <div className='card ml-5 '>
          <h1 className=' font-semibold text-2xl mb-3'>Making a design system from scratch</h1>
          <div className=' text-gray-500'>
          <span className=' text-center card-sub '>12 Feb 2020</span>
          <span className=' border-gray-400 text-xs  m-4 border-[1px]'></span>
          <span className=' card-sub text-right'>Design , Pattern</span>
          </div>
          <p className='mt-6 text-gray-600 '>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
        </div>
      </section>
      <section >
      <h4 className=' mt-[50px] text-bold text-lg relative left-[20%]'>Featured works</h4>
      <div className=' m-2 flex justify-center items-center'>
        <div className='f-work'>
          <div className=' m-4 flex '>
            <Image className=' rounded-md' src={'/Rectangle-30.png'} width={246} height={184} alt='' />
            <div className=' ml-4'>
              <h1 className='mb-3 text-bold text-2xl'>Designing Dashboards</h1>
              <span className='bg-red-400 text-white rounded-lg text-xs pr-1 pl-1 mr-2'>2020</span>
              <span className='text-sm  text-gray-600'>Dashboard</span>
              <p className='text-gray-600 text-sm mt-3'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </div>
          <div className=' m-4 flex '>
            <Image className=' rounded-md' src={'/Rectangle-32.png'} width={246} height={184} alt='' />
            <div className=' ml-4'>
              <h1 className='mb-3 text-bold text-2xl'>Designing Dashboards</h1>
              <span className='bg-red-400 text-white rounded-lg text-xs pr-1 pl-1 mr-2'>2020</span>
              <span className='text-sm  text-gray-600'>Dashboard</span>
              <p className='text-gray-600 text-sm mt-3'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </div>
          <div className=' m-4 flex '>
            <Image className=' rounded-md' src={'/Rectangle-34.png'} width={246} height={184} alt='' />
            <div className=' ml-4'>
              <h1 className='mb-3 text-bold text-2xl'>Designing Dashboards</h1>
              <span className='bg-red-400 text-white rounded-lg text-xs pr-1 pl-1 mr-2'>2020</span>
              <span className='text-sm  text-gray-600'>Dashboard</span>
              <p className='text-gray-600 text-sm mt-3'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section className='h-[183px] w-auto'>
        <div className=' gap-[51px] justify-center flex items-center'>
          <Image src={'/fb.png'} alt='fb' width={30} height={30}/>
          <Image src={'/insta.png'} alt='fb' width={30} height={30}/>
          <Image src={'/twitter.png'} alt='fb' width={30} height={30}/>
          <Image src={'/Linkedin.png'} alt='fb' width={30} height={30}/>
        </div>
        <div className='f-text text-xl justify-center m-4 text-black flex '>Copyright ©2020 All rights reserved</div>
      </section>
    </main>
  )
}

export default page