import { useElement } from "../context/TaskContext"

const InfoElement = () => {

    const { newElement, changeElement } = useElement()
    console.log(newElement)
    return (
        <div>
            {newElement.name ?
                (
                    <div className="z-20 h-[100%] w-[100%] absolute  bg-white dark:bg-[#303030] p-4  overflow-auto" >
                        <div className="w-[50px] h-[50px] rounded-md  hover:bg-slate-200 flex items-center dark:hover:bg-gray-700  justify-center " onClick={() => changeElement({})}>
                            <svg xmlns="http://www.w3.org/2000/svg" className=" fixed icon icon-tabler icon-tabler-arrow-narrow-left dark:text-white text-black" width="24" height="24" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M5 12l4 4" /><path d="M5 12l4 -4" /></svg>
                        </div>
                        <div className="h-[350px] sticky">
                        </div>
                        <div >
                            <h1 className="text-3xl dark:text-white text-black">{newElement.name} ({newElement.element}) - {newElement.number}</h1>
                            <h3 className="text-xl dark:text-white text-black my-2">{newElement.group[0].toUpperCase()}{newElement.group.slice(1,)}</h3>
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