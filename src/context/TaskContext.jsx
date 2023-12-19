import { createContext, useContext, useState } from "react"

const ElementContext = createContext()

export const useElement = () => {
    const context = useContext(ElementContext)
    if (!context) {
        throw new Error("useElement must be used within a ElementContextProvider")
    }
    return context
}

export const ElementContextProvider = ({ children }) => {

    const [newElement, setNewElement] = useState({})

    const changeElement = (newElement) => {
        console.log(newElement)
        setNewElement(newElement)
    }

    return (
        <ElementContext.Provider value={{ newElement, changeElement }}>
            {children}
        </ElementContext.Provider>
    )
}