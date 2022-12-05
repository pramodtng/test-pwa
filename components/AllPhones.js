/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

const AllPhones = ({ phones }) => {
  const STRAPI_BASEURL = 'https://tashielectronicsbackend.tashicell.com'
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl py-2 px-4 sm:px-6 lg:max-w-7xl lg:px-4'>
        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {
            phones.data.map(function (datas) {
              return (
                <div key={datas.id} className="group relative p-5 shadow-lg">
                  <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
                    <img
                      src={`${STRAPI_BASEURL + datas.attributes.image.data.attributes.url}`}
                      alt={datas.attributes.image.data.attributes.caption}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <h2 className='text-center p-5'> {datas.attributes.title} </h2>
                  <h2>Nu. {datas.attributes.discPrice} </h2>
                  <div className='flex flex-row justify-between items-center p-1'>
                    <h2 className='line-through' >Nu. {datas.attributes.sellingPrice} </h2>
                    <h2 className='border-2 p-1'>Nu. {parseInt(datas.attributes.sellingPrice - datas.attributes.discPrice)}  </h2>
                  </div>
                  <div className='flex flex-row justify-center p-5'>
                    <Link href={`phones/${datas.id}`}>
                      <div
                        className="w-full bg-blue-500 tracking-wide text-white font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center cursor-pointer">
                        <span className="mx-auto">View Details</span>
                      </div>
                    </Link>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default AllPhones