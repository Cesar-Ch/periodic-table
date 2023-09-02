import Box from "./Box"

const FamilyNickel = () => {
    const elementsVIIB = [["Ni", "Nickel", "transition-metals", "28"], ["Pd","Palladium","transition-metals","46"],["Pt","Platinum","transition-metals","78"],["Ds","Darmstadtium","unknown","110"]]
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

export default FamilyNickel