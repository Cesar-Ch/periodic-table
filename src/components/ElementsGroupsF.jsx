import Box from "./Box"


const ElementsGroupsF = ({ elementGroup, selectedGroup }) => {
    return (
        <div className="flex flex-row items-center justify-center">
            {
                elementGroup.map((element, i) => (
                    <Box selectedGroup={selectedGroup} symbol={element["symbol"]} name={element["element"]} group={element["type"].toLowerCase().split(' ').join('-')} number={element["atomicNumber"]} mass={element["atomicMass"]} density={element["density"]} mp={element["meltingPoint"]} bp={element["boilingPoint"]} discovered={element["discovered"]} year={element["yearDiscovered<"]} key={i} />
                ))
            }
        </div>
    )
}

export default ElementsGroupsF