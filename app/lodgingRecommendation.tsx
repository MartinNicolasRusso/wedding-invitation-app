import React from 'react'

export const LodgingRecommendation = () => {
  return (
    <div
        className="elementor-shape elementor-shape-top flex  h-auto bg-[#F4F0ED]  relative"
        data-negative="false"
      >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            className="absolute top-0 left-50"
            preserveAspectRatio="none"
            >
            <path
                className="elementor-shape-fill"
                opacity="0.33"
                d="67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
            ></path>
            <path
                className="elementor-shape-fill"
                opacity="0.66"
                fill="#FFFF"
                d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
            ></path>
            <path
                className="elementor-shape-fill"
                fill="#FFFF"
                d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
            ></path>
            </svg>
        <div className='flex flex-col justify-evenly items-center w-screen overflow-hidden bg-[#F4F0ED] h-[921px] mt-52'>
            <h1 className='font-garamond text-[45px] text-[#4B4B4B]'>Recomendación de Hospedaje</h1>
            <img src='images/elemento-ornament.png' className='w-[238px]'/>
            <div className='flex flex-row items-center w-[90%] justify-between'>
                <div className='flex flex-col items-center gap-4'>
                    <h2 className='text-[25px] text-[#000000] font-garamond'>Estancia El Chanar Hotel de Campo</h2>
                    <h2 className='font-poppins text-[12px] text-[#000000] font-light tracking-[4px]'>Castelli 1203 | 2223411457</h2>
                    <button className="bg-[#DCCCB9] px-[45px] py-[15px] mt-6 hover:px-[60px] hover:py-[20px] hover:duration-500 duration-500 ">
                        <p className="text-[18px] text-white hover:text-black font-garamond uppercase">
                        abrir mapa
                        </p>
                    </button>
                </div>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <h2 className='text-[25px] text-[#000000] font-garamond'>Finca Maria Cristina</h2>
                    <h2 className='font-poppins text-[12px] text-[#000000] font-light tracking-[4px] text-center'>Ruta 215 km 67.5 entrada a Loma Verde,<br/>Brandsen.</h2>
                    <button className="bg-[#DCCCB9] px-[45px] py-[15px] mt-6 hover:px-[60px] hover:py-[20px] hover:duration-500 duration-500 ">
                        <p className="text-[18px] text-white hover:text-black font-garamond uppercase">
                        abrir mapa
                        </p>
                    </button>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <h2 className='text-[25px] text-[#000000] font-garamond'>Quinta La Aerobica</h2>
                    <h2 className='font-poppins text-[12px] text-[#000000] font-light tracking-[4px]'>Ayacucho Esq. Guemes | Cel 2223575552</h2>
                    <button className="bg-[#DCCCB9] px-[45px] py-[15px] mt-6 hover:px-[60px] hover:py-[20px] hover:duration-500 duration-500 ">
                        <p className="text-[18px] text-white hover:text-black font-garamond uppercase">
                        abrir mapa
                        </p>
                    </button>
                </div>
            </div>
            <div className='flex flex-row items-center w-[90%] justify-evenly'>
                <div className='flex flex-col items-center gap-4'>
                    <h2 className='text-[25px] text-[#000000] font-garamond'>Campo Brandsen</h2>
                    <h2 className='font-poppins text-[12px] text-[#000000] font-light tracking-[4px]'>Ruta 215 KM 38.500 Brandsen | (11) 51838645</h2>
                    <button className="bg-[#DCCCB9] px-[45px] py-[15px] mt-6 hover:px-[60px] hover:py-[20px] hover:duration-500 duration-500 ">
                        <p className="text-[18px] text-white hover:text-black font-garamond uppercase">
                        abrir mapa
                        </p>
                    </button>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <h2 className='text-[25px] text-[#000000] font-garamond'>Granja Educativa Loma Verde</h2>
                    <h2 className='font-poppins text-[12px] text-[#000000] font-light tracking-[4px]'>Ruta 215 km 44,5 | 2223 505173</h2>
                    <button className="bg-[#DCCCB9] px-[45px] py-[15px] mt-6 hover:px-[60px] hover:py-[20px] hover:duration-500 duration-500 ">
                        <p className="text-[18px] text-white hover:text-black font-garamond uppercase">
                        abrir mapa
                        </p>
                    </button>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <h2 className='text-[25px] text-[#000000] font-garamond'>El Viejo Pangare</h2>
                    <h2 className='font-poppins text-[12px] text-[#000000] font-light tracking-[4px]'>Ruta Provincial 215 | 5248-2738</h2>
                    <button className="bg-[#DCCCB9] px-[45px] py-[15px] mt-6 hover:px-[60px] hover:py-[20px] hover:duration-500 duration-500 ">
                        <p className="text-[18px] text-white hover:text-black font-garamond uppercase">
                        abrir mapa
                        </p>
                    </button>
                </div>
            </div>
            <div className='flex flex-row items-center  w-[90%] justify-evenly'>
                <div className='flex flex-col items-center gap-4'>
                    <h2 className='text-[25px] text-[#000000] font-garamond'>La Posta de Tavo</h2>
                    <h2 className='font-poppins text-[12px] text-[#000000] font-light tracking-[4px]'>Ruta 215 km 44,5 | 2223 505173</h2>
                    <button className="bg-[#DCCCB9] px-[45px] py-[15px] mt-6 hover:px-[60px] hover:py-[20px] hover:duration-500 duration-500 ">
                        <p className="text-[18px] text-white hover:text-black font-garamond uppercase">
                            abrir mapa
                        </p>
                    </button>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <h2 className='text-[25px] text-[#000000] font-garamond'>Airbnb</h2>
                    <h2 className='font-poppins text-[12px] text-[#000000] font-light tracking-[4px]'>Reserva mediante la App</h2>
                    <button className="bg-[#DCCCB9] px-[45px] py-[15px] mt-6 hover:px-[60px] hover:py-[20px] hover:duration-500 duration-500 ">
                        <p className="text-[18px] text-white hover:text-black font-garamond uppercase">
                            abrir mapa
                        </p>
                    </button>
                </div>
            </div>
        </div>
    </div>  
    )
}
