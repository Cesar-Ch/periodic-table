const Box = ({ element, name, group,number }) => {
    return (
        <div className={`relative rounded-md mr-1 mb-1 p-1 text-center`} style={{ border: `2px solid var(--${group})`, color: `var(--${group})`, filter: `drop-shadow(0 0 5px var(--${group})` }} >
            <div className="flex justify-start font-bold">
                {number}
            </div>
            <div className="text-2xl">
                {element}
            </div>
            <div >
                {name}
            </div>

        </div>
    )
}

export default Box