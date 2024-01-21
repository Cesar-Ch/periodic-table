import ElementsGroups from './ElementsGroups';
import ElementsGroupsF from "./ElementsGroupsF"
import { useEffect,useState } from 'react';

const Table = ({ selectedGroup }) => {


    const [groupsPeriodicTable, setGroupsPeriodicTable] = useState([])
    const [groupsblockF, setGroupsblockF] = useState([])

    useEffect(() => {
        const fetchGroups = async () => {
            try {
                const response = await fetch("https://periodic-table-api-dev-qdas.1.us-1.fl0.io/groups");
                const data = await response.json();
                console.log('api');
                const groups = data.map((group, i) => {

                    if (i === 2) {
                        return [...group.elements.slice(0, 2), {
                            "element": "57-71",
                            "type": "Lanthanides"
                        },
                        {
                            "element": "89-103",
                            "type": "Actinides"
                        }]
                    } else {
                        return group.elements
                    }
                });
                const blockF = [data[2].elements.slice(2, 17), data[2].elements.slice(17, 32)]

                return [groups, blockF];
            } catch (error) {
                console.error("Error fetching groups:", error);
                return [];
            }
        };

        const periodicTable = async () => {
            const groups = await fetchGroups();
            setGroupsPeriodicTable(groups[0])
            setGroupsblockF(groups[1])
        };
        periodicTable();

    },[])
    return (
        <section className="w-[100%]  px-12 flex justify-start flex-col overflow-auto pt-10" style={{ height: `calc(100% - 130px)` }}>

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