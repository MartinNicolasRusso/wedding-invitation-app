"use client"
import React, { useEffect } from "react";

export const CountDownComponent = () => {

  return (
      <div className="flex flex-col bg-[rgb(238,238,238)] text-center w-auto h-[100%] items-center py-[6%]">
        <h1 className="font-garamond text-[45px] text-[#4B4B4B] ">TE ESPERAMOS EN NUESTRA BODA</h1>
        <div className="w-32 h-[2px] bg-white my-4"/>
        <h1 className="font-bodoni  text-[27px] uppercase text-[#818181]">1 de marzo de 2023</h1>
        <div className="flex gap-14 text-center auto-cols-max bg-[rgb(238,238,238)]  py-[2%]">
            <div className="flex flex-col pt-8 pb-6 px-3 items-center bg-[rgb(238,238,238)] border-4 border-double border-[#7d4b003f] w-48 text-[#4E565F]">
              <span className="countdown font-mono text-5xl">
                {/* @ts-ignore */}
                <span style={{ "--value": 29 }}></span>
              </span>
              Días
            </div>
            <div className="flex flex-col pt-8 pb-6 px-3 items-center bg-[rgb(238,238,238)] border-4 border-double border-[#7d4b003f] w-48 text-[#4E565F]">
              <span className="countdown font-mono text-5xl">
                {/* @ts-ignore */}
                <span style={{ "--value": 21 }}></span>
              </span>
              Horas
            </div>
            <div className="flex flex-col pt-8 pb-6 px-3 items-center bg-[rgb(238,238,238)] border-4 border-double border-[#7d4b003f] w-48 text-[#4E565F]">
              <span className="countdown font-mono text-5xl">
                {/* @ts-ignore */}
                <span style={{ "--value": 17 }}></span>
              </span>
              Minutos
            </div>
            <div className="flex flex-col pt-8 pb-6 px-3 items-center bg-[rgb(238,238,238)] border-4 border-double border-[#7d4b003f] w-48 text-[#4E565F]">
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
