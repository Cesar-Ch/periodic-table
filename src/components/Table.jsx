import { blockF, periodicTable } from '../data/buildTable.js';
import { ElementsGroups } from "./ElementsGroups"
import { ElementsGroupsF } from "./ElementsGroupsF"


export const Table = ({ selectedGroup }) => {
    return (
        <main className="text-[10px] w-screen h-screen overflow-auto ">
            <div className="w-full  flex flex-col mb-32">
                <section className="w-full p-12  flex justify-start flex-col ">
                    <div className="flex">
                        {
                            periodicTable.map((element, i) => (
                                <ElementsGroups elementGroup={element} key={i} selectedGroup={selectedGroup} />
                            ))
                        }
                    </div>
                    <div className="flex justify-start ml-40 mt-5 flex-wrap">
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