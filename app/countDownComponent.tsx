"use client"
import React, { useEffect } from "react";

export const CountDownComponent = () => {

  return (
      <div className="flex flex-col bg-[#F4F0ED] bg-[url('/images/leaf-ornament.png')] text-center  bg-no-repeat bg-bottom items-center pt-[5%]">
        <h1 className="font-garamond text-[45px] text-[#4B4B4B] ">TE ESPERAMOS EN NUESTRA BODA</h1>
        <img  src='/images/elemento-ornament.png' className="w-auto h-[40px] my-4"/>
        <h1 className="font-bodoni  text-[27px] uppercase text-[#818181]">1 de marzo de 2023</h1>
        <div className="flex gap-14 text-center max-w-[1400px] relative justify-center items-center pb-56 bg-[#F4F0ED] py-[2%] ">
            <div className="flex flex-col pt-[30px] pb-[25px] px-[10px] items-center bg-[#F4F0ED] border-4 border-double border-[#7d4b003f] w-[180px] text-[#4E565F]">
              <span className="countdown font-mono text-5xl">
                {/* @ts-ignore */}
                <span style={{ "--value": 29 }}></span>
              </span>
              Días
            </div>
            <div className="flex flex-col pt-[30px] pb-[25px] px-[10px] items-center bg-[#F4F0ED] border-4 border-double border-[#7d4b003f] w-[180px] text-[#4E565F]">
              <span className="countdown font-mono text-5xl">
                {/* @ts-ignore */}
                <span style={{ "--value": 21 }}></span>
              </span>
              Horas
            </div>
            <div className="flex flex-col pt-[30px] pb-[25px] px-[10px] items-center bg-[#F4F0ED] border-4 border-double border-[#7d4b003f] w-[180px] text-[#4E565F]">
              <span className="countdown font-mono text-5xl">
                {/* @ts-ignore */}
                <span style={{ "--value": 17 }}></span>
              </span>
              Minutos
            </div>
            <div className="flex flex-col pt-8 pb-6 px-3 items-center bg-[#F4F0ED] border-4 border-double border-[#7d4b003f] w-[180px] text-[#4E565F]">
              <span className="countdown font-mono text-5xl">
                {/* @ts-ignore */}
                <span style={{ "--value": 42 }}></span>
              </span>
              Segundos
            </div>
          </div>
    </div>
    );
};
