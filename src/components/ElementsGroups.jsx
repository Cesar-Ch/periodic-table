import Box from "./Box"

export const ElementsGroups = ({ elementGroup, selectedGroup }) => {

    return (
        <div className="flex flex-col justify-end">
            {
                elementGroup.map((element, i) => (
                    <Box selectedGroup={selectedGroup} element={element} key={i} />
                ))
            }
        </div>
    )
}
