import { blockF, periodicTable } from '../data/consts';
import ElementsGroups from './ElementsGroups';
import ElementsGroupsF from "./ElementsGroupsF"

const Table = ({ selectedGroup }) => {
    return (
        <main className="text-[10px] w-[100vw] h-[100vh] overflow-auto ">
            <div className="w-[100%]  flex flex-col mb-32">
                <section className="w-[100%] p-12  flex justify-start flex-col ">
                    <div className="flex">
                        {
                            periodicTable.map((element, i) => (
                                <ElementsGroups elementGroup={element} key={i} selectedGroup={selectedGroup} />
                            ))
                        }
                    </div>
                    <div className="flex justify-start ml-[160px] mt-5 flex-wrap">
                        {
                            blockF.map((element, i) => (
                                <ElementsGroupsF elementGroup={element} key={i} selectedGroup={selectedGroup} />
                            ))
                        }
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Table