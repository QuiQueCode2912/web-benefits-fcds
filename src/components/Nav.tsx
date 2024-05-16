import Link from 'next/link'
import React from 'react'

const Nav = ({categories}: any) => {
  return (
    <nav className="flex  text-nowrap gap-2 text-black  dark:text-white text-xl md:text-base items-end">
      {categories?.data?.map((category: any) => (
        <Link className='relative dark:bg-cds-dark/70 text-base md:font-light md:text-sm group w-fit flex px-3 py-1.5 flex-nowrap rounded border border-white text-white dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out' key={category.id} href={`/${category.attributes.slug}`}>
          {category.attributes.name}
        </Link>
      ))}
    </nav>
  )
}

export default Nav