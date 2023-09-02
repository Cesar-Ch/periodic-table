import Box from "./Box"

const FamilyChromium = () => {
    const elementsVIB = [["Cr", "Chromium", "transition-metals", "24"], ["Mo","Molybdenum","transition-metals","42"],["W","Tungsten","transition-metals","74"],["Sg","Seaborgium","transition-metals","106"]]
    return (
        <div className="flex flex-col justify-end">
            {
                elementsVIB.map((element, i) => (
                    <Box element={element[0]} name={element[1]} group={element[2]} number={element[3]} key={i} />

                ))
            }
        </div>
    )
}

export default FamilyChromium