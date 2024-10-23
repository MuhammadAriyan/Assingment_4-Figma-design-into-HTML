import React from 'react'
import '@/app/globals.css'
import Link from 'next/link'
import Image from 'next/image'
const page = () => {
  return (
    <main className='mainbody'>
      <nav>
        <ul>
          <li id='WorksLi'><Link href={''}>Works</Link></li>
          <li id='BlogLi'><Link href={''}>Blog</Link></li>
          <li id='ContactLi'><Link href={''}>Contact</Link></li>
        </ul>
      </nav>
      <section className="  flex justify-around items-center h-[817px]" >
        <div className=' p-2 w-[541px]'>
        <h1 className='hHero text-5xl '>Hi, I am John,</h1>
        <h1 className=' hHero text-5xl pb-4'>Creative Technologist</h1>
        <p className=' text-lg pb-10 pt-4'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <button className=' mt-4 mb-7 p-2 text-white bg-red-400 shadow-sm shadow-black'>Download Resume</button>
        </div>
        <div>
          <Image className='' width={242} height={249} alt='hero' src={'/hero.png'}/>
        </div>
      </section>
    </main>
  )
}

export default page