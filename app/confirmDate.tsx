"use client";
import React, { useState } from "react";
import "./globals.css";

export const ConfirmDate = () => {
  const [codigo, setCodigo] = useState("");
  const [expand, setExpand] = useState(false);
  const [codigoValido, setCodigoValido] = useState(false);

  const handleChange = (e) => {
    const codigoIngresado = e.target.value;
    setCodigo(codigoIngresado);

    if (codigoIngresado === "F1MX") {
      setCodigoValido(true);
      setExpand(true)
    } else {
      setCodigoValido(false);
      setExpand(false)
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white h-[314px]">
        <h1 className="font-garamond text-[#4B4B4B] text-[45px] tracking-[3.25px]">
          ¡SAVE THE DATE!
        </h1>
        <p className="tracking-[3.25px] text-[#4B4B4B] text-[22px] font-garamond">
          En tu calendario
        </p>
        <button className="bg-[#DCCCB9] px-[45px] py-[15px] mt-6 hover:px-[70px] hover:py-[17px] hover:duration-500 duration-500 ">
          <p className="text-sm text-white hover:text-black font-garamond">
            AGREGAR A GOOGLE CALENDAR
          </p>
        </button>
      </div>
      <div
        className="elementor-shape elementor-shape-top flex  h-auto bg-[#F4F0ED] bg-[url(/images/fondo-contacto.png)] relative"
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
        <div className="flex flex-col w-[800px] min-h-[664px] mx-auto bg-white justify-center items-center border-solid border-4 mt-52 gap-5 p-[150px] mb-24">
          <h1 className="text-[#4B4B4B] font-garamond text-[37px] uppercase ">
            Confirmar asistencia
          </h1>
          <p className="text-[22px] text-[#4B4B4B] tracking-[3.5px] font-garamond font-medium leading-6">
            ¡Te invitamos a nuestra boda!
          </p>
          <p className="text-black">Usa el siguiente código</p>
          <p className="text-black">
            Ejemplo: <b>F1MX</b>
          </p>
          <div className="flex flex-col border-solid border-2 px-7 py-7 w-[498px] min-h-[139px] justify-center items-center">
            <h1 className="text-[#666666] font-times font-bold  text-[19.8px]">
              Código de Invitación
            </h1>
            <input
              className="px-[16.830px] py-[13.464px] w-[441px] bg-[#FAFAFA] border-solid border-2 border-[#d6d8d9] rounded-sm"
              id="codigo"
              type="text"
              value={codigo}
              onChange={handleChange}
            />

            {codigoValido && (
              <div className={`flex items-center flex-col gap-8 mt-20 transition-all duration-500 ease-in-out ${expand ? 'h-[900px]' : 'h-0'}`}>
                <div className="flex flex-col items-center justify-center font-times text-[#666666]">
                  <p className="text-[18.81px]">Hola Familia Fernandez!</p>
                  <p className="text-[18.81px]">Tienen 4 accesos</p>
                </div>
                <div className="flex flex-col gap-8 items-center font-times">
                  <p className="font-semibold font-times text-[19.8px] text-[#666666]">Respuestas</p>
                  <div className="flex flex-row gap-2">
                    <input type="radio" className="rounded-full "/>
                    <p className="text-[18.81px] text-[#666666]">Claro, ahí estare(mos)</p>
                  </div>
                  <div className="flex flex-row gap-2">
                    <input type="radio" className="rounded-full" />
                    <p className="text-[18.81px] text-[#666666]">Lo siento, no podre(mos) asistir</p>
                  </div>
                  <div className="flex flex-col justify-center items-center ">
                    <p className="font-semibold font-times text-[19.8px] text-[#666666]">¿Cuantas personas asistirán?</p>
                    <div className="flex flex-row gap-4">
                      <div className="flex flex-row gap-2">
                        <input type="radio" />
                        <p className="text-[#666666]">1</p>
                      </div>
                      <div className="flex flex-row gap-2">
                        <input type="radio" className="rounded-full"/>
                        <p className="text-[#666666]">2</p>
                      </div>
                      <div className="flex flex-row gap-2">
                        <input type="radio" className="rounded-full"/>
                        <p className="text-[#666666]">3</p>
                      </div>
                      <div className="flex flex-row gap-2">
                        <input type="radio" className="rounded-full"/>
                        <p className="text-[#666666]">4</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <p className="font-semibold font-times text-[19.8px] text-[#666666]">Nombre de asistentes</p>
                    <input className="w-[438px] h-[139px] bg-[#FAFAFA] border-solid border-2 border-[#d6d8d9] rounded-sm"/>
                  </div>
                  <div className="flex flex-col justify-center items-center ">
                    <p className="font-semibold font-times text-[19.8px] text-[#666666]">Escribenos un deseo</p>
                    <input className="w-[438px] h-[167px] bg-[#FAFAFA]  border-solid border-2 border-[#d6d8d9] rounded-sm "/>
                  </div>
                </div>
                <button className="bg-[#61b5a8] text-white w-[216px] text-[19px] px-[18px] py-[9px] font-garamond font-semibold rounded-sm">
                    <p className="font-times">
                        Enviar Confirmación
                    </p>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
