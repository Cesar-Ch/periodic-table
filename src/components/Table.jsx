import ElementsGroups from './ElementsGroups';
import ElementsGroupsF from "./ElementsGroupsF"
import { groupsPeriodicTable, groupsblockF } from '../data/api';

const Table = ({ selectedGroup }) => {
    return (
        <section className="w-[100%]  px-12 flex justify-start flex-col overflow-auto pt-10" style={{height: `calc(100% - 130px)`}}>
            
            <div className="flex">
                {
                    groupsPeriodicTable.map((element, i) => (
                        <ElementsGroups elementGroup={element} key={i} selectedGroup={selectedGroup} />
                    ))
                }
            </div>
            <div className="flex justify-start mt-16 mb-5 ml-[160px] flex-wrap">
                {
                    groupsblockF.map((element, i) => (
                        <ElementsGroupsF elementGroup={element} key={i} selectedGroup={selectedGroup} />
                    ))
                }
            </div>
        </section>

    )
}

export default Table