import Box from "./Box"

const Halogens = () => {
    const elementsVIIA = [["F", "Fluorine", "non-metals", "9"], ["Cl", "Chlorine", "non-metals", "17"], ["Br", "Bromine", "non-metals", "35"], ["I", "Iodine", "non-metals","53"],["At","Astatine","post-transition-metals","85"],["Ts","Tennessine","unknown","117"]]
    return (
        <div className="flex flex-col justify-end">
            {
                elementsVIIA.map((element, i) => (
                    <Box element={element[0]} name={element[1]} group={element[2]} number={element[3]} key={i} />

                ))
            }
        </div>
    )
}

export default Halogens