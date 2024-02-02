"use client"
import React, { useState } from 'react'
import { TbBrandInstagram  } from "react-icons/tb";
import { MdPhotoCamera } from "react-icons/md";

export const PicturesWedding = () => {
  const [over, setOver] = useState(false)

  return (
  <div className='  bg-gradient-to-t from-[#F4F0ED] from-0% to-white to-22%'>
    <div className='bg-[url(/images/fondo-contacto.png)] bg-white h-[395px] bg-contain justify-center items-center opacity-55 flex flex-col'>
      <p className='text-[#808080] text-[19px] font-garamond font-semibold tracking-[3.25px]'>En nuestra boda comparte tus fotos con nosotros, utiliza el</p>
      <p className='font-rufina italic text-[41px] font-light  text-[#DCCCB9] '>#LULAYPAU</p>
      <TbBrandInstagram  style={{color:'#DCCCB9'}} size='6rem'/> 
      <p className='font-garamond italic text-[#808080] text-[19px] font-semibold tracking-[3.25px]'>Y usa nuestro filtro de instagram</p>
      <button className='border-4 border-solid border-[#DCCCB9] flex flex-row items-center rounded-full gap-2 px-10 py-5 animate-bounce mt-4 hover:bg-[#DCCCB9] hover:text-white' onMouseEnter={() => {setOver(true)}} onMouseLeave={() => {setOver(false)}}> 
        <MdPhotoCamera style={{color: over ? 'white': '#DCCCB9' }} size='2rem' /> Usar filtro de instagram
      </button>
     </div>
  </div>
  )
}
