import Box from "./Box"

const FamilyCopper = () => {
    const elementsIB = [["Cu", "Copper", "transition-metals", "29"], ["Ag","Silver","transition-metals","47"],["Au","Gold","transition-metals","79"],["Rg","Roentgenium","unknown","111"]]
    return (
        <div className="flex flex-col justify-end">
            {
                elementsIB.map((element, i) => (
                    <Box element={element[0]} name={element[1]} group={element[2]} number={element[3]} key={i} />

                ))
            }
        </div>
    )
}

export default FamilyCopper