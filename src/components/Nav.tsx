import Link from 'next/link'
import React from 'react'

const Nav = ({categories}: any) => {
  return (
    <nav className="flex gap-2 md:gap-4 text-black  dark:text-white text-xl md:text-base items-end">
      {categories?.data?.map((category: any) => (
        <Link className='relative text-base md:text-lg group w-fit flex px-3 py-1.5 flex-nowrap rounded border border-black/15 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out' key={category.id} href={`/${category.attributes.slug}`}>
          {category.attributes.name}
        </Link>
      ))}
    </nav>
  )
}

export default Nav