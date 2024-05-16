import Link from 'next/link'
import React from 'react'
import { ChevronLeft } from 'lucide-react';


const BackButton = () => {
  return (
    <Link 
          className='relative mb-4 font-light text-md group w-fit flex pl-1 pr-3 py-1.5 flex-nowrap rounded border border-black/15 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out' 
          href="/"
        >
          <ChevronLeft className='h-6 w-6 stroke-1' />
          Back
        </Link>
  )
}

export default BackButton