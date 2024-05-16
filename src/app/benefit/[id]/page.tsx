import Container from '@/components/Container'
import Link from 'next/link'
import React from 'react'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

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

const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  return format(date, "EEEE d 'de' MMMM 'del' yyyy", { locale: es });
}

const Page = async ({ params }: { params: { id: number } }) => {
  const blog = await fetchSeeBlogs(params.id);
  
  if (!blog) {
    return <div>Error loading blog post</div>;
  }

  const updatedAt = blog.data.attributes.updatedAt;
  const formattedDate = formatDate(updatedAt);

  return (
    <article className=''>
      <Container>
        <Link 
          className='relative mb-4 font-normal text-base md:text-lg group w-fit flex px-3 py-1.5 flex-nowrap rounded border border-black/15 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out' 
          href="/"
        >
          { "< Back "}
        </Link>
        <div>
          <span className='mt-2 font-light text-sm dark:text-gray-400'>{`Última actualización: ${formattedDate}`}</span>
          <img className='w-full mt-2 max-h-[420px] object-cover' src={`${process.env.LOCALHOST}${blog.data.attributes.image.data.attributes.url}`} alt="Fotografía del blog de beneficios" />
        </div>
        <h4 className='text-2xl'>{blog.data.attributes.name}</h4>
        <p>
          {blog.data.attributes.short_description}
        </p>
        <div>
          <BlocksRenderer content={blog.data.attributes.content} />
        </div>
      </Container>
    </article>
  );
}

export default Page;


