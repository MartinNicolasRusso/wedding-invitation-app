export const TogetherComponent = () => {
  return (
    <div className="w-auto h-[60%] flex justify-center items-center py-[7%]">
        <div className=" flex flex-col mr-2">
            <h1 className="font-amalfi text-[25px] text-right mb-2">Lucre Buedieman</h1>
            <p className="text-right text-[15px] h-[120px] font-bodoni text-[#7A7A7A] italic tracking-wide">Pabli sana mis pensamientos. Descubriendo <br/>y respetando quien quiero ser. Es mi lugar <br/> en donde me siento en paz, segura y puede<br/> ser yo.</p>
        </div>
        <div className="flex flex-row">
            <img src="images/togetherComponentLula.jpg" alt="image" className="w-auto h-[548px] mr-1"/>
            <img src="images/togetherComponentPau.jpg" alt="image" className="w-auto h-[548px]"/>
        </div>
        <div className=" flex flex-col ml-2">
            <h1 className="font-amalfi text-[25px] text-left mb-2">Pablo Rivas</h1>
            <p className="text-left text-[15px] w-[286px] font-bodoni italic text-[#7A7A7A] tracking-wide">Porque encontré de dónde aferrarme cuando pasan tormentas, y la que me enseña a bailar bajo la lluvia esperando atardeceres infinitos.</p>
        </div>
    </div>
  )
}
