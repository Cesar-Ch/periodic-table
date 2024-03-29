const Groups = ({ setSelectedGrooup }) => {

    const groups = ["Alkali Metals", "Alkaline Earth Metals", "Lanthanides", "Actinides", "Transition Metals", "Post-Transition Metals", "Metalloids", "Non Metals", "Noble Gases", "Unknown"]
    
    return (
        <div>
            <nav className="w-[100%] flex items-center text-sm   overflow-auto text-black dark:text-white px-4">
                {
                    groups.map((group, i) => (
                        <div key={i} className="flex items-center ">
                            <div className="w-[15px] h-[15px]  rounded-[50%]"
                                style={{ backgroundColor: `var(--${group.toLowerCase().split(' ').join('-')})`, border: `3px solid var(--${group.toLowerCase().split(' ').join('-')}-text)` }}>
                            </div>
                            <p
                                onClick={() => setSelectedGrooup(groups[i].toLowerCase().split(' ').join('-'))}
                                className={`p-3 cursor-pointer whitespace-nowrap`}  >
                                {group}
                            </p>
                        </div>
                    ))
                }
            </nav>
        </div>
    )
}

export default Groups