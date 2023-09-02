import Box from "./Box"


const FamilyZinc = () => {
    const elementsIIB = [["Zn", "Zinc", "transition-metals", "30"], ["Cd","Cadmium","transition-metals","48"],["Hg","Mercury","transition-metals","80"],["Cn","Copernicium","unknown","112"]]
    return (
        <div className="flex flex-col justify-end">
            {
                elementsIIB.map((element, i) => (
                    <Box element={element[0]} name={element[1]} group={element[2]} number={element[3]} key={i} />

                ))
            }
        </div>
    )
}

export default FamilyZinc