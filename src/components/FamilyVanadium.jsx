import Box from "./Box"


const FamilyVanadium = () => {
    const elementsVB = [["V", "Vanadium", "transition-metals", "23"], ["Nb","Niobium","transition-metals","41"],["Ta","Tantalum","transition-metals","73"],["Db","Dubnium","transition-metals","105"]]
    return (
        <div className="flex flex-col justify-end">
            {
                elementsVB.map((element, i) => (
                    <Box element={element[0]} name={element[1]} group={element[2]} number={element[3]} key={i} />

                ))
            }
        </div>
    )
}

export default FamilyVanadium