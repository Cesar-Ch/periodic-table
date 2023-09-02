import Box from "./Box"


const Actinides = () => {
    const actinides = [["Ac","Actinium","aktinoids","89"],["Th","Thorium","aktinoids","90"],["Pa","Protactinium","aktinoids","91"],["U","Uranium","aktinoids","92"],["Np","Neptunium","aktinoids","93"],["Pu","Plutonium","aktinoids","94"],["Am","Americium","aktinoids","95"],["Cm","Curium","aktinoids","96"],["Bk","Berkelium","aktinoids","97"],["Cf","Californium","aktinoids","98"],["Es","Einsteinium","aktinoids","99"],["Fm","Fermium","aktinoids","100"],["Md","Mendelevium","aktinoids","101"],["No","Nobelium","aktinoids","102"],["Lr","Lawrencium","aktinoids","103"]]
    return (
        <div className="flex flex-row items-center justify-center">
            {
                actinides.map((element, i) => (
                    <Box element={element[0]} name={element[1]} group={element[2]} number={element[3]} key={i} />

                ))
            }
        </div>
    )
}

export default Actinides