import Box from "./Box"

const FamilyEscandium = () => {
    const elementsIIIB = [["Sc", "Scandium", "transition-metals", "21"], ["Y", "Yttrium", "transition-metals", "39"], ["", "57-71", "lanthanoids"], ["", "89-103", "aktinoids"]]
    return (
        <div className="flex flex-col justify-end">
            {
                elementsIIIB.map((element, i) => (
                    <Box element={element[0]} name={element[1]} group={element[2]} number={element[3]} key={i} />

                ))
            }
        </div>
    )
}

export default FamilyEscandium