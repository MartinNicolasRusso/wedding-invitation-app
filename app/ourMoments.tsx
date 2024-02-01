"use client"
import React from 'react'
import ImageScroll from './imageScroll'


export const OurMoments = () => {
  return (
    <div className='flex flex-col bg-white pt-52 '>
        <ImageScroll />
      <div className='flex flex-col items-center justify-center gap-1 mt-80 relative'>
        <img src='/images/leaf-ornament.png'className='bg-no-repeat h-[500px] w-auto absolute top-1'/> 
        <h1 className='font-garamond text-[45px] uppercase text-black'>nuestros momentos</h1>
        <p className='tracking-wider font-garamond'>Compartimos con ustedes nuestro amor</p>
        <div className='flex flex-row gap-1 w-[510px] h-[510px] justify-center'>
            <img src='images/LULAYPAU-GALLERY7.jpg' className='object-cover hover:grayscale-[50%] hover:duration-500 duration-500'/>
            <img src='images/LULAYPAU-GALLERY4.jpg' className='object-cover hover:grayscale-[50%] hover:duration-500 duration-500'/> 
        </div>
        <div className='flex flex-row gap-1 w-[510px] h-[510px] justify-center'>
            <img src='images/LULAYPAU-GALLERY2.jpg' className='object-cover hover:grayscale-[50%] hover:duration-500 duration-500'/> 
            <img src='images/LULAYPAU-GALLERY6.jpg' className='object-cover hover:grayscale-[50%] hover:duration-500 duration-500'/> 
        </div>
        <div className='flex flex-row gap-1 w-[510px] h-[510px] justify-center'>
            <img src='images/LULAYPAU-GALLERY.jpg' className='object-cover hover:grayscale-[50%] hover:duration-500 duration-500'/> 
            <img src='images/LULAYPAU-GALLERY3.jpg' className='object-cover hover:grayscale-[50%] hover:duration-500 duration-500'/> 
        </div>
      </div>
    </div>
  
  )
}
