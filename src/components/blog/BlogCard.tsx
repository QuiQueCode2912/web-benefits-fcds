import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = () => {
  return (
    <div>
      <Link href={"/"}>
        <div>
          <Image layout='fill' objectFit='cover' src={""} alt=''/>
          <p>Hola mundo</p>
        </div>
      </Link>
    </div>
  )
}

export default BlogCard