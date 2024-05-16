import Link from 'next/link'
import React from 'react'

const BlogCard = ({blog}:any) => {
  return (
    <Link key={`${blog.id}`} href={`/benefit/${blog.id}`} className="group rounded-lg relative block overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img className="object-cover absolute top-0 left-0 w-full h-48 group-hover:scale-110 duration-300" src={`${process.env.LOCALHOST}${blog.attributes.image.data.attributes.url}`} alt="Fotografía" />
              </div>
              <div className="relative flex flex-nowrap py-3 px-4 pr-10 rounded-b-lg border border-black/15 dark:border-white/20  hover:bg-black/5 dark:group-hover:bg-white/5 hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out">
                <div className="flex flex-col flex-1 truncate">
                  <div className="font-semibold">
                    {blog.attributes.name}
                  </div>
                  <p className="text-sm text-wrap">
                    {blog.attributes.short_description}
                  </p>
                </div>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24"
                  className="absolute top-1/2 right-2 -translate-y-1/2 size-5 stroke-2 fill-none stroke-current">
                  <line x1="5" y1="12" x2="19" y2="12" className="translate-x-3 group-hover:translate-x-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
                  <polyline points="12 5 19 12 12 19" className="-translate-x-1 group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
                </svg>
              </div>
            </Link>
  )
}

export default BlogCard