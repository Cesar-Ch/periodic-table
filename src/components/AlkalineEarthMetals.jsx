import Box from "./Box"

const AlkalineEarthMetals = () => {
    const elementsIIA = [["Be", "Beryllium", "alkaline-earth-metals", "4"], ["Mg", "Magnesium", "alkaline-earth-metals", "12"], ["Ca", "Calcium", "alkaline-earth-metals", "20"], ["Sr", "Strintium", "alkaline-earth-metals", "38"], ["Ba", "Barium", "alkaline-earth-metals", "56"], ["Ra", "Radium", "alkaline-earth-metals", "88"]]
    return (
        <div className="flex flex-col justify-end"> 
            {
                elementsIIA.map((element, i) => (
                    <Box element={element[0]} name={element[1]} group={element[2]} number={element[3]} key={i} />

                ))
            }
        </div>
    )
}

export default AlkalineEarthMetals