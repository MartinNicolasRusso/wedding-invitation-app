import React from 'react'

export const Schedule = () => {
  return (
    <div className='flex flex-col items-center justify-center  bg-[#F7F7F7] bg-[url(/images/fondo-flores.png)] bg-no-repeat bg-bottom bg-fixed'>
        <h1 className='text-[#4B4B4B] font-garamond font-normal tracking-[3.5px] text-[45px]'>Orden del Gran Día</h1>
        <div className='flex flex-col w-[875px] justify-center items-center'>
            <div className='flex flex-row items-center  justify-center'>
                <p className='w-[282px] text-right font-rufina italic text-[26px] text-[#232323]'>18:00pm</p>
                <div className='w-[282px] flex justify-center items-center'>
                <img src='/images/LINEA-ITINERARIO-beige.png' className='w-[15.89px] h-[116.53px] mx-16'/>
                </div>
                <p className='w-[282px] font-rufina italic text-[26px] text-[#232323]'>Ceremonia</p>
            </div>
            <div className='flex flex-row items-center justify-center '>
                <p className='w-[282px] text-right font-rufina italic text-[26px] text-[#232323]'>Recepción</p>
            
                <div className='w-[282px] flex justify-center items-center'>
                    <img src='/images/LINEA-ITINERARIO-beige.png' className='w-[15.89px] h-[116.53px] mx-16'/>
                </div>
                <p className='w-[282px] font-rufina italic text-[26px] text-[#232323]'>19:00 pm</p>
            </div>
            <div className='flex flex-row items-center justify-center gap-2 '>
                <p className='w-[282px] text-right font-rufina italic text-[26px] text-[#232323]'>20:00 pm</p>
                <div className='w-[282px] flex justify-center items-center'>
                    <img src='/images/LINEA-ITINERARIO-beige.png' className='w-[15.89px] h-[116.53px] mx-16'/>
                </div>
                <p className='w-[282px] font-rufina italic text-[26px] text-[#232323] '>Entrada de Novios</p>
            </div>
            <div className='flex flex-row items-center justify-center gap-2'>
                <p className='w-[282px] text-right font-rufina italic text-[26px] text-[#232323]'>Cena</p>
                <div className='w-[282px] flex justify-center items-center'>
                    <img src='/images/LINEA-ITINERARIO-beige.png' className='w-[15.89px] h-[116.53px] mx-16'/>
                </div>
                <p className='w-[282px] font-rufina italic text-[26px] text-[#232323]'>21:30 pm</p>
            </div>
            <div className='flex flex-row items-center justify-center gap-2'>
                <p className='w-[282px] text-right font-rufina italic text-[26px] text-[#232323]'>22:30 pm</p>
                <div className='w-[282px] flex justify-center items-center'>
                    <img src='/images/LINEA-ITINERARIO-beige.png' className='w-[15.89px] h-[116.53px] mx-16'/>
                </div>
                <p className='w-[282px] font-rufina italic text-[26px] text-[#232323]'>Empieza la fiesta</p>
            </div>
            <div className='flex flex-row items-center justify-center gap-2 '>
                <p className='w-[282px] text-right font-rufina italic text-[26px] text-[#232323]'>A seguir <br/>dándolo todo</p>
                <div className='w-[282px] flex justify-center items-center'>
                    <img src='/images/LINEA-ITINERARIO-beige.png' className='w-[15.89px] h-[116.53px] mx-16'/>
                </div>
                <p className='w-[282px] font-rufina italic text-[26px] text-[#232323]'>23:00 pm</p>
            </div>
            <div className='flex flex-row items-center justify-center gap-2'>
                <p className='w-[282px] text-right font-rufina italic text-[26px] text-[#232323]'>3:00 pm</p>
                <div className='w-[282px] flex justify-center items-center'>
                    <img src='/images/LINEA-ITINERARIO-beige.png' className='w-[15.89px] h-[116.53px] mx-16'/>
                </div>
                <p className='w-[282px] font-rufina italic text-[26px] text-[#232323]'>Gracias por acompañarnos</p>
            </div>
        </div>
    </div>

    )
}
