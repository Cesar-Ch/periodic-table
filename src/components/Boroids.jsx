import Box from "./Box"

const Boroids = () => {
    const elementsIIIA = [["B", "Boron", "metalloids", "5"], ["Al","Aluminium","post-transition-metals","13"],["Ga","Gallium","post-transition-metals","31"],["In","Indium","post-transition-metals","49"],["Tl","Thallium","post-transition-metals","81"],["Nh","Nihonium","unknown","113"]]
    return (
        <div className="flex flex-col justify-end">
            {
                elementsIIIA.map((element, i) => (
                    <Box element={element[0]} name={element[1]} group={element[2]} number={element[3]} key={i} />

                ))
            }
        </div>
    )
}

export default Boroids