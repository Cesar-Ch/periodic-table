import { useEffect, useRef, useState } from "react"
import ElementsGroups from "./components/ElementsGroups"
import Groups from "./components/Groups"
import { periodicTable, blockF } from "./data/consts"
import ElementsGroupsF from "./components/ElementsGroupsF"
import Switch from "./components/Switch"
import InfoElement from "./components/InfoElement"
import { ElementContextProvider } from "./context/TaskContext"
// import { useElement } from "./context/TaskContext"
function App() {

  const ref = useRef(null)
  const [selectedGroup, setSelectedGrooup] = useState('all')
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  })

  const handleGroupClick = (group) => {
    setSelectedGrooup(group)
  }

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark")
    } else {
      document.querySelector("html").classList.remove("dark")
    }
  }, [theme])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setSelectedGrooup('all')
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <ElementContextProvider>
      <InfoElement />
      <main className="text-[10px] w-[100vw] h-[100vh] overflow-auto ">
        <div className="w-[100%]  flex flex-col mb-32">
          <section className="w-[100%] p-12  flex justify-start flex-col ">
            <div className="flex">
              {
                periodicTable.map((element, i) => (
                  <ElementsGroups elementGroup={element} key={i} selectedGroup={selectedGroup} />
                ))
              }
            </div>
            <div className="flex justify-start ml-[160px] mt-5 flex-wrap">
              {
                blockF.map((element, i) => (
                  <ElementsGroupsF elementGroup={element} key={i} selectedGroup={selectedGroup} />
                ))
              }
            </div>
          </section>

          <nav ref={ref} className="z-10 bottom-[125px] fixed translate-y-[100%] max-w-[100%] m-0  bg-white dark:bg-[#303030] w-[100%] flex flex-col p-0 shadow-[0_-2px_4px_0_rgba(60,64,67,0.15)] dark:shadow-[0_-2px_4px_0_rgba(230,230,230,0.3)]">
            <div className="p-5 justify-between flex">
              <h1 className="text-3xl font-bold text-black dark:text-white">Periodic Table </h1>
              <Switch theme={theme} setTheme={setTheme} />
            </div>
            <Groups handleGroupClick={handleGroupClick} />

          </nav>
        </div>
      </main>
    </ElementContextProvider>
  )
}

export default App
