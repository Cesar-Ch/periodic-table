const Groups = ({ onGroupClick }) => {

    const groups = ["Alkali Metals", "Alkaline Earth Metals", "Lanthanides", "Actinides", "Transition Metals", "Post-Transition Metals", "Metalloids", "Non Metals", "Noble Gasses", "Unknown"]

    const handleGroupClick = (group) => {
        onGroupClick(group)
    }

    return (
        <header>

            <nav className="flex items-center text-sm w-[100%]">
                {
                    groups.map((group, i) => (
                        <div key={i} >
                            <p onClick={() => handleGroupClick(groups[i].toLowerCase().split(' ').join('-'))} className={`p-3 cursor-pointer`} style={{ color: `var(--${groups[i].toLowerCase().split(' ').join('-')})`, filter: `drop-shadow(0 0 5px var(--${groups[i].toLowerCase().split(' ').join('-')})` }} >
                                {group}
                            </p>
                        </div>
                    ))
                }

            </nav>
        </header>
    )
}

export default Groups