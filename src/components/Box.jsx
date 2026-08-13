import { useElement } from "../context/TaskContext"

const Box = ({ element, selectedGroup }) => {

    const { changeElement } = useElement()

    if (!element) return null

    const { simbolo, nombre, categoria, numero_atomico, placeholder } = element

    const isVisible = (selectedGroup === 'all') || (selectedGroup === categoria)

    return (
        <div
            className={`symbol ${categoria} ${isVisible ? 'opacity-100' : 'opacity-60'} ${placeholder ? "pointer-events-none" : "pointer-events-auto"}  w-20 h-20 relative rounded-md mr-1 mb-1 p-1 text-center cursor-pointer`
            }
            style={{ border: `2px solid var(--${categoria}-text)`, color: `var(--${categoria})`, backgroundColor: `var(--${categoria})` }} onClick={() => { if (!placeholder) changeElement(element) }} translate="no"
        >
            <div className="flex justify-between font-extrabold text-[#3f4a53]" >
                <div>
                    {numero_atomico ?? ''}
                </div>
                

            </div>
            <div
                className="text-2xl font-bold "
                style={{
                    color: `var(--${categoria}-text)`,
                }}
            >
                {simbolo}
            </div>
            <div style={{ color: `var(--${categoria}-text)` }}>
                {nombre}
            </div>

        </div >
    )
}

export default Box
