const Box = ({ element, name, group, number }) => {
    return (
        <div className={`w-[75px] h-[75px] relative rounded-md mr-1 mb-1 p-1 text-center`} style={{ border: `2px solid #3f4a53`, color: `var(--${group})`, backgroundColor: `var(--${group})`,boxShadow:`1px 2.5px 1px #202020`}} >
            <div className="flex justify-start font-extrabold text-[#3f4a53]">
                {number}
            </div>
            <div className="text-2xl text-[#3f4a53]" style={{
                textShadow: `1px  1.5px  1px   var(--${group}-text)`,color: `var(--${group}-text) `}}>
                {element}
            </div>
            <div style={{ color: `var(--${group}-text)` }}>
                {name}
            </div>

        </div>
    )
}

export default Box