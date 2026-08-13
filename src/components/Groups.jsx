const groups = [
    { slug: "alkali-metals", label: "Metales alcalinos" },
    { slug: "alkaline-earth-metals", label: "Metales alcalinotérreos" },
    { slug: "lanthanides", label: "Lantánidos" },
    { slug: "actinides", label: "Actínidos" },
    { slug: "transition-metals", label: "Metales de transición" },
    { slug: "post-transition-metals", label: "Metales post-transición" },
    { slug: "metalloids", label: "Metaloides" },
    { slug: "non-metals", label: "No metales" },
    { slug: "noble-gases", label: "Gases nobles" },
    { slug: "unknown", label: "Desconocido" },
]

const Groups = ({ setSelectedGrooup }) => {

    return (
        <div>
            <nav className="w-[100%] flex items-center text-sm   overflow-auto text-black dark:text-white px-4">
                {
                    groups.map((group, i) => (
                        <div key={i} className="flex items-center ">
                            <div className="w-[15px] h-[15px]  rounded-[50%]"
                                style={{ backgroundColor: `var(--${group.slug})`, border: `3px solid var(--${group.slug}-text)` }}>
                            </div>
                            <p
                                onClick={() => setSelectedGrooup(group.slug)}
                                className={`p-3 cursor-pointer whitespace-nowrap`}  >
                                {group.label}
                            </p>
                        </div>
                    ))
                }
            </nav>
        </div>
    )
}

export default Groups
