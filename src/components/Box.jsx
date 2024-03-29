import { useElement } from "../context/TaskContext"

const Box = ({ symbol, name, group, number, selectedGroup, mass, density, mp, bp, discovered, year }) => {

    const { changeElement } = useElement()

    return (
        <div
            className={`symbol ${group} ${(selectedGroup === 'all') || (selectedGroup === group) ? 'opacity-100' : 'opacity-60'} ${symbol ? "pointer-events-auto" : "pointer-events-none"}  w-[75px] h-[75px] relative rounded-md mr-1 mb-1 p-1 text-center cursor-pointer hover:scale-110 hover:z-10 `
            }
            style={{ border: `2px solid #3f4a53`, color: `var(--${group})`, backgroundColor: `var(--${group})`, boxShadow: `1px 2.5px 1px #555` }} onClick={() => { changeElement({ name, symbol, number, group, mass, density, mp, bp, discovered, year }) }} translate="no"
        >
            <div className="flex justify-start font-extrabold text-[#3f4a53]" >
                {number}
            </div>
            <div className="text-2xl text-[#3f4a53]" style={{
                textShadow: `1px  1.5px  1px   var(--${group}-text)`, color: `var(--${group}-text) `
            }}>
                {symbol}
            </div>
            <div style={{ color: `var(--${group}-text)` }}>
                {name}
            </div>

        </div >
    )
}

export default Box