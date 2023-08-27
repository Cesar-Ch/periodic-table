import Box from "./Box"

const AlkaliMetals = () => {

    const elementsIA = [
        ["H", "Hydrogen","non-metals","1"], ["Li", "Lithium","alkali-metals","3"], ["Na", "Sodium","alkali-metals","11"], ["K", "Potassium","alkali-metals","19"], ["Rb", "Rubidium","alkali-metals","37"], ["Cs", "Caesium","alkali-metals","55"], ["Fr", "Francium","alkali-metals","87"]
    ]

    return (
        <div>
            {
                elementsIA.map((element, i) => (
                    <Box element={element[0]} name={element[1]} group={element[2]} number={element[3]} key={i} />

                ))
            }
        </div>
    )
}

export default AlkaliMetals