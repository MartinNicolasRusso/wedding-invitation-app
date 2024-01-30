export default function Home() {
  return (
      <div className="w-auto h-screen flex items-center justify-center bg-[url('/images/boda1.jpg')] bg-cover">
        <div className="items-center flex flex-col">
          <h3 className="text-[15px] text-white tracking-[8px] font-semibold uppercase ">nuestra boda</h3>
          <h1 className="text-white text-[85px] font-garamond font-thin">LULA & PAU</h1>
          <div className="w-32 h-[2px] bg-white my-4"/>
          <p className="text-[15px] text-white tracking-[8px] text-center font-semibold uppercase">te invitamos a compartir <br/> la alegría de unir nuestras vidas</p>
        </div>
      </div>
  );
}
