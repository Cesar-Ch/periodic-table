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
    console.log(groups);
    return groups[0];
};

const blockF = async () => {
    const groups = await fetchGroups();
    console.log(groups);
    return groups[1]
}

export const groupsPeriodicTable =  periodicTable()
export const groupsblockF =  blockF()