import React from 'react'

const Card = ({blog}:any) => {
  return (
    <div key={blog.id} className="flex flex-col md:flex-row rounded-lg relative ">
              <div className="relative md:w-1/3 h-48">
                <img className="object-cover top-0 left-0 w-full h-48 group-hover:scale-110 duration-300" src={`${process.env.LOCALHOST}${blog.attributes.image.data.attributes.url}`} alt="Fotografía" />
              </div>
              <div className="relative md:w-2/3 md:pl-4 flex flex-nowrap py-3 md:pr-10 rounded-b-lg  text-white">
                <div className="flex flex-col flex-1 truncate">
                  <div className="font-semibold text-xl">
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