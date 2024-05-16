import React from 'react'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import Image from 'next/image'


const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  return format(date, "EEEE d 'de' MMMM 'del' yyyy", { locale: es });
}

const Card = ({blog}:any) => {

  const updatedAt = blog.attributes.updatedAt;
  const formattedDate = formatDate(updatedAt);

  return (
    <div key={blog.id} className="flex flex-col md:flex-row rounded-lg relative ">
              <div className="relative md:w-1/3 h-48">
                <img width="1500" height="500" className="object-cover top-0 left-0 w-full h-48 group-hover:scale-110 duration-300" src={`${process.env.LOCALHOST}${blog.attributes.image.data.attributes.url}`} alt="Fotografía" />
              </div>
              <div className="relative md:w-2/3 dark:text-white text-black md:pl-4 flex flex-nowrap py-3 md:pr-10 rounded-b-lg">
                <div className="flex flex-col flex-1 truncate">
                  <div className="font-semibold text-xl">
                    <span className='mt-2 font-light text-sm text-gray-700 dark:text-gray-400'>{`Actualizado el ${formattedDate}`}</span><br />
                    {blog.attributes.name}
                  </div>
                  <p className="text-medium text-wrap">
                    {blog.attributes.short_description}
                  </p>
                </div>
              </div>
            </div>
  )
}

export default Card