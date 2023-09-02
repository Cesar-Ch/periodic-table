import Box from "./Box"


const Chalcoids = () => {
    const elementsVIA = [["O","Oxygen","non-metals","8"],["S","Sulfur","non-metals","16"],["Se","Selenium","non-metals","34"],["Te","Teosinte","metalloids","52"],["Po","Polonium","post-transition-metals","84"],["Lv","Livermorium","unknown","116"]]
    return (
        <div className="flex flex-col justify-end">
            {
                elementsVIA.map((element, i) => (
                    <Box element={element[0]} name={element[1]} group={element[2]} number={element[3]} key={i} />

                ))
            }
        </div>
    )
}

export default Chalcoids