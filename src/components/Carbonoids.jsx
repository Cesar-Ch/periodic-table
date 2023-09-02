import Box from "./Box"

const Carbonoids = () => {
    const elementsIVA = [["C","Carbon","non-metals","6"],["Si","Silicon","metalloids","14"],["Ge","Germanium","metalloids","32"],["Sn","Tin","post-transition-metals","50"],["Pb","Lead","post-transition-metals","82"],["Fl","Flerovium","unknown","114"]]
    return (
        <div className="flex flex-col justify-end">
            {
                elementsIVA.map((element, i) => (
                    <Box element={element[0]} name={element[1]} group={element[2]} number={element[3]} key={i} />

                ))
            }
        </div>
    )
}

export default Carbonoids