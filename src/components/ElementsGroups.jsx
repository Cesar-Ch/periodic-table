import Box from "./Box"

const ElementsGroups = ({ elementGroup, selectedGroup }) => {

    return (
        <div className="flex flex-col justify-end">
            {
                elementGroup.map((element, i) => (
                    <Box selectedGroup={selectedGroup} element={element[0]} name={element[1]} group={element[2]} number={element[3]} key={i} />
                ))
            }
        </div>
    )
}

export default ElementsGroups