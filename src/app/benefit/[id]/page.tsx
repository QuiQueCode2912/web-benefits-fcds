import Container from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function fetchSeeBlogs(id: number) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKE}`
    }
  }

  try {
    const res = await fetch(`${process.env.LOCALHOST}/api/benefit-blogs/${id}?populate=*`, options);
    const response = await res.json();
    return response;
    
  } catch (err) {
    console.error(err);
  }
}

const page = async ({ params }: any) => {

  const blog = await fetchSeeBlogs(params.id)
  
  return (
    <article className=''>
      <Container>
        <Link 
          className='relative mb-4 text-base md:text-lg group w-fit flex px-3 py-1.5 flex-nowrap rounded border border-black/15 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out' 
          href="/"
        >
          { "< Back "}
        </Link>
        <div>
          <img className='w-full max-h-[420px] object-cover' src={`${process.env.LOCALHOST}${blog.data.attributes.image.data.attributes.url}`} alt="Fotografía del blog debenefícios" />
        </div>
        <h4 className='text-2xl'>{blog.data.attributes.name}</h4>
        <p>
          {blog.data.attributes.short_description}
        </p>
      </Container>
    </article>
  )
}

export default page