import { fetchSeeBlogs } from '@/app/services'
import Container from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const page = () => {
  
  return (
    <article className=''>
      <Container>
        <Link href="/">{ "< Back "}</Link>
        <h4 className='text-2xl'>Hola mundo</h4>
      </Container>
    </article>
  )
}

export default page