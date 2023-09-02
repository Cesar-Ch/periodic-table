import Box from "./Box"

const FamilyTitanium = () => {
    const elementsIVB = [["Ti", "Titanium", "transition-metals", "22"], ["Zr", "Zirconium", "transition-metals", "40"], ["Hf","Hafnium","transition-metals","72"],["Rf","Rutherfordium","transition-metals","104"]]
    return (
        <div className="flex flex-col justify-end">
            {
                elementsIVB.map((element, i) => (
                    <Box element={element[0]} name={element[1]} group={element[2]} number={element[3]} key={i} />

                ))
            }
        </div>
    )
}

export default FamilyTitanium