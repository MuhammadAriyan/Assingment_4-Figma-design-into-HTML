import React from 'react'
import '@/app/globals.css'
import Link from 'next/link'
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
    </main>
  )
}

export default page