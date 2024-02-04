import React from 'react'

export const Location = () => {
  return (
    <div className='flex flex-col bg-white bg-[url("/images/leaf-ornament.png")] bg-no-repeat bg-top justify-center items-center h-[508px] gap-5'>
        <h1 className='font-garamond text-[45px] text-[#4B4B4B] uppercase'>Ubicación</h1>
        <p className='font-garamond text-[22px] text-[#4B4B4B] tracking-[3.5px] '>CEREMONIA Y RECEPCIÓN</p>
        <img src='images/elemento-ornament.png' className='w-[238px]'/>
        <p className='font-garamond text-[#000000] text-[25px]'>Estancia Monte Viejo</p>
        <p className='font-poppins text-[12px] tracking-[2.6px] font-light text-[#000000]'>SÁBADO 12 DE JULIO</p>
        <p className='font-poppins text-[13px] tracking-[2.6px] font-light text-[#000000]'>06:00 pm</p>
        <a href="https://www.google.com/maps/place/Estancia+Monte+Viejo/@-35.190532,-58.263907,15z/data=!4m2!3m1!1s0x0:0xbb65356280c31b7f?sa=X&ved=2ahUKEwjf8ePCu_z7AhXrM0QIHZlMCzMQ_BJ6BAhsEAc">
        <button className="bg-[#DCCCB9] px-[45px] py-[15px] mt-6 hover:px-[60px] hover:py-[20px] hover:duration-500 duration-500 ">
          <p className="text-[18px] text-white hover:text-black font-garamond uppercase">
            Ver Más
          </p>
        </button>
        </a>
    </div>
  )
}
