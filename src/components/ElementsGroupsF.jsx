import Box from "./Box"


export const ElementsGroupsF = ({ elementGroup, selectedGroup }) => {
    return (
        <div className="flex flex-row items-center justify-center">
            {
                elementGroup.map((element, i) => (
                    <Box selectedGroup={selectedGroup} element={element} key={i} />
                ))
            }
        </div>
    )
}
