import ArrowLeft from "../canvas/ArrowLeft"
import Element from "../canvas/Element"
import { useElement } from "../context/TaskContext"

const InfoElement = () => {

    const { newElement, changeElement } = useElement()
    return (
        <div>
            {newElement.name ?
                (
                    <div className="z-20 absolute h-[100%] w-[100%]   bg-white dark:bg-[#303030] p-7  overflow-auto" >
                        <div className=" w-[50px] h-[50px] rounded-md  hover:bg-slate-200 flex items-center dark:hover:bg-gray-700  justify-center " onClick={() => changeElement({})}>
                            <ArrowLeft />
                        </div>
                        <div className="h-[350px] ">
                            <Element number={newElement.number} name={newElement.name} />
                        </div>
                        <div className="dark:text-white text-black flex-col ">
                            <h1 className="text-3xl">{newElement.name} ({newElement.symbol}) - {newElement.number}</h1>
                            <h3 className="text-xl my-2">{newElement.group[0].toUpperCase()}{newElement.group.split('-').join(' ').slice(1,)}</h3>
                            <h3 className="pt-2">Symbol: {newElement.symbol}</h3>
                            <h3 className="pt-2">Atomic mass: {newElement.mass}</h3>
                            <h3 className="pt-2">Density: {newElement.density}g/cm³</h3>
                            <h3 className="pt-2">Melting: {newElement.mp}°C</h3>
                            <h3 className="pt-2">Boiling: {newElement.bp}°C</h3>
                            <h3 className="pt-2">Discovered by: {newElement.discovered}</h3>
                            <h3 className="pt-2">Year of discovery: {newElement.year}</h3>
                            <a href={`https://en.wikipedia.org/wiki/${newElement.name}`} target="__blank" className="bg-slate-200 text-black/75 text-xs flex items-center rounded-md p-1 w-[200px] my-3">
                                <img src="wikipedia.png" alt="logo de wikipedia" width={30} />
                                More about {newElement.name}
                            </a>
                        </div>
                    </div>
                ) : (<></>)}
        </div>
    )
}

export default InfoElement