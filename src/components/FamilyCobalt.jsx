import Box from "./Box"

const FamilyCobalt = () => {
    const elementsVIIIB = [["Co", "Cobalt", "transition-metals", "27"], ["Rh","Rhodium","transition-metals","45"],["Ir","Iridium","transition-metals","77"],["Mt","Meitnerium","unknown","109"]]
    return (
        <div className="flex flex-col justify-end">
            {
                elementsVIIIB.map((element, i) => (
                    <Box element={element[0]} name={element[1]} group={element[2]} number={element[3]} key={i} />

                ))
            }
        </div>
    )
}

export default FamilyCobalt