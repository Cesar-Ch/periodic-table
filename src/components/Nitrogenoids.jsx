import Box from "./Box"


const Nitrogenoids = () => {
    const elementsVA = [["N", "Nitrogen", "non-metals", "7"],["P","Phosphorus","non-metals","15"],["As","Arsenic","metalloids","32"],["Sb","Antimony","metalloids","50"],["Bi","Bismuth","post-transition-metals","82"],["Mc","Moscovium","unknown","115"]]
    return (
        <div className="flex flex-col justify-end">
            {
                elementsVA.map((element, i) => (
                    <Box element={element[0]} name={element[1]} group={element[2]} number={element[3]} key={i} />

                ))
            }
        </div>
    )
}

export default Nitrogenoids