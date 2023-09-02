import Box from "./Box"

const NobleGases = () => {
    const elementsVIIIA = [["He","  Helium","noble-gasses","2"],["Ne"," Neon","noble-gasses","10"],["Ar"," Argon","noble-gasses","18"],["Kr"," Krypton","noble-gasses","36"],["Xe"," Xenon","noble-gasses","54"],["Rn"," Radon","noble-gasses","86"],["Og"," Oganesson","unknown","118"]]
    return (
        <div className="flex flex-col justify-end">
            {
                elementsVIIIA.map((element, i) => (
                    <Box element={element[0]} name={element[1]} group={element[2]} number={element[3]} key={i} />

                ))
            }
        </div>
    )
}

export default NobleGases