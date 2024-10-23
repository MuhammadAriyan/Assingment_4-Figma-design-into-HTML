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
      <section className=" flex items-center border-4 border-black " >
          <Image className=' rounded-xl m-[40px]' width={1030} height={308} alt='hero' src={'/hero-section.png'}/>
      </section>
    </main>
  )
}

export default page