import ArrowLeft from "../canvas/ArrowLeft"
import Element from "../canvas/Element"
import { useElement } from "../context/TaskContext"

const InfoElement = () => {

    const { newElement, changeElement } = useElement()
    return (
        <div>
            {newElement.nombre ?
                (
                    <div className="z-20 absolute h-[100%] w-[100%]   bg-white dark:bg-[#303030] p-7  overflow-auto" >
                        <div className=" w-[50px] h-[50px] rounded-md  hover:bg-slate-200 flex items-center dark:hover:bg-gray-700  justify-center " onClick={() => changeElement({})}>
                            <ArrowLeft />
                        </div>
                        <div className="h-[350px] ">
                            <Element number={String(newElement.numero_atomico)} name={newElement.nombre_en} />
                        </div>
                        <div className="dark:text-white text-black flex-col ">
                            <h1 className="text-3xl font-bold">{newElement.nombre} ({newElement.simbolo}) - {newElement.numero_atomico}</h1>
                            <h3 className="text-xl my-2 font-bold">{newElement.categoria_es}</h3>
                            <p className="pt-2 font-light text-[#666] dark:text-[#ccc]">

                                <span
                                    className="font-bold dark:text-white text-black">
                                    Símbolo:&nbsp;
                                </span>
                                
                                {newElement.simbolo}

                            </p>
                            <p className="pt-2 font-light text-[#666] dark:text-[#ccc]">
                                <span
                                    className="font-bold dark:text-white text-black">
                                    Masa atómica:&nbsp;
                                </span>
                                {newElement.peso_atomico}
                            </p>
                            {newElement.densidad != null && <p className="pt-2 font-light text-[#666] dark:text-[#ccc]">
                                <span
                                    className="font-bold dark:text-white text-black">
                                    Densidad:&nbsp;
                                </span>
                                
                                {newElement.densidad} g/cm³
                            </p>}
                            {newElement.punto_fusion_c != null && <p className="pt-2 font-light text-[#666] dark:text-[#ccc]">
                                <span
                                    className="font-bold dark:text-white text-black">
                                    Punto de fusión:&nbsp;
                                </span>
                                {newElement.punto_fusion_c}°C
                            </p>}
                            {newElement.punto_ebullicion_c != null && <p className="pt-2 font-light text-[#666] dark:text-[#ccc]">
                                <span
                                    className="font-bold dark:text-white text-black">
                                    Punto de ebullición:&nbsp;
                                </span>
                                {newElement.punto_ebullicion_c}°C
                            </p>}
                            <p className="pt-2 font-light text-[#666] dark:text-[#ccc]">
                                <span
                                    className="font-bold dark:text-white text-black">
                                    Descubierto por:&nbsp;
                                </span>
                                {newElement.descubridor}
                            </p>
                            {newElement.anio_descubrimiento != null && <p className="pt-2 font-light text-[#666] dark:text-[#ccc]">
                                <span
                                    className="font-bold dark:text-white text-black">
                                    Año de descubrimiento:&nbsp;    
                                </span>
                                {newElement.anio_descubrimiento}
                            </p>}
                            <a href={`https://en.wikipedia.org/wiki/${newElement.nombre_en}`} target="__blank" className="bg-slate-200 text-black/75 text-xs flex items-center rounded-md p-1 w-[200px] my-3">
                                <img src="wikipedia.png" alt="logo de wikipedia" width={30} />
                                Más sobre {newElement.nombre}
                            </a>
                        </div>
                    </div>
                ) : (<></>)}
        </div>
    )
}

export default InfoElement
