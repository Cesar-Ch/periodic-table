import { useEffect, useRef, useState } from "react"
import Groups from "./components/Groups"
import Switch from "./components/Switch"
import InfoElement from "./components/InfoElement"
import Table from "./components/Table"

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
    <>
      <InfoElement />
      <Table selectedGroup={selectedGroup} />

      <nav ref={ref} className="z-10 bottom-[125px] fixed translate-y-[100%] max-w-[100%] m-0  bg-white dark:bg-[#303030] w-[100%] flex flex-col p-0 shadow-[0_-2px_4px_0_rgba(60,64,67,0.15)] dark:shadow-[0_-2px_4px_0_rgba(230,230,230,0.3)]">
        <div className="p-5 justify-between flex">
          <h1 className="text-3xl font-bold text-black dark:text-white">Periodic Table </h1>
          <Switch theme={theme} setTheme={setTheme} />
        </div>
        <Groups handleGroupClick={handleGroupClick} />

      </nav>

    </>
  )
}

export default App
