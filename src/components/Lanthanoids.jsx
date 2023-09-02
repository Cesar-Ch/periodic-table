import Box from "./Box"

const Lanthanoids = () => {
    const elementsIIIB = [["La", "Lanthanum", "lanthanoids", "57"], ["Ce", "Cerium", "lanthanoids", "58"], ["Pr", "Praseodymium", "lanthanoids", "59"], ["Nd", "Neodymium", "lanthanoids", "60"], ["Pm", "Promethium", "lanthanoids", "61"], ["Sm", "Samarium", "lanthanoids", "62"], ["Eu", "Europium","lanthanoids","63"],["Gd", "Gadolinium","lanthanoids","64"],["Tb", "Terbium","lanthanoids","65"],["Dy", "Dysprosium","lanthanoids","66"],["Ho", "Holmium","lanthanoids","67"],["Er", "Erbium","lanthanoids","68"],["Tm", "Thulium","lanthanoids","69"],["Yb", "Ytterbium","lanthanoids","70"],["Lu", "Lutetium","lanthanoids","71"]]
  return (
    <div className="flex flex-row items-center justify-center"> 
    {
        elementsIIIB.map((element, i) => (
            <Box element={element[0]} name={element[1]} group={element[2]} number={element[3]} key={i} />

        ))
    }
</div>
  )
}

export default Lanthanoids