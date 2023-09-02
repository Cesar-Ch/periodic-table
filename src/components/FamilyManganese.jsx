import Box from "./Box"

const FamilyManganese = () => {
    const elementsVIIB = [["Mn", "Manganese", "transition-metals", "25"], ["Tc","Technetium","transition-metals","43"],["Re","Rhenium","transition-metals","75"],["Bh","Bohrium","transition-metals","107"]]
    return (
        <div className="flex flex-col justify-end">
            {
                elementsVIIB.map((element, i) => (
                    <Box element={element[0]} name={element[1]} group={element[2]} number={element[3]} key={i} />

                ))
            }
        </div>
    )
}

export default FamilyManganese