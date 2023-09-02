import Box from "./Box"


const FamilyIron = () => {
    const elementsVIIIB = [["Fe","Iron","transition-metals","26"],["Ru","Ruthenium","transition-metals","44"],["Os","Osmium","transition-metals","76"],["Hs","Hassium","transition-metals","108"]]
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

export default FamilyIron