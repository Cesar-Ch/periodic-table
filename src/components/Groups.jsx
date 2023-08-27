const Groups = ({ colors }) => {

    const groups = ["Alkali Metals", "Alkaline Earth Metals", "Lanthanoids", "Aktinoids", "Transition Metals", "Post-Transition Metals", "Metalloids", "Nonmetals", "Noble Gasses", "Unknown"]

    return (
        <header>

            <nav className="flex items-center text-sm w-[100%]">
                {
                    groups.map((group, i) => (
                        <div key={i}>
                            <p className={`p-3 `} style={{ color: `${colors[i]}`, filter: `drop-shadow(0 0 5px ${colors[i]}` }}>
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