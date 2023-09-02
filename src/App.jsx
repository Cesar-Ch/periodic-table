import { useEffect, useRef, useState } from "react"
import ElementsGroups from "./components/ElementsGroups"
import Groups from "./components/Groups"
import { periodicTable } from "./components/consts"
import { blockF } from "./components/consts"
import ElementsGroupsF from "./components/ElementsGroupsF"

function App() {

  const ref = useRef(null)
  const [selectedGroup, setSelectedGrooup] = useState('all')

  const handleGroupClick = (group) => {
    setSelectedGrooup(group)
  }

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
    <div className="p-10 text-[10px]  w-[100vw] h-[vh]">
      <main className="flex justify-start">
        {
          periodicTable.map((element, i) => (
            <ElementsGroups elementGroup={element} key={i} selectedGroup={selectedGroup} />
          ))
        }
      </main>

      <section className="flex justify-start ml-[160px] mt-5 flex-wrap">
        {
          blockF.map((element, i) => (
            <ElementsGroupsF elementGroup={element} key={i} selectedGroup={selectedGroup} />
          ))
        }
      </section>
      <footer ref={ref}>
        <Groups onGroupClick={handleGroupClick} />
      </footer>

    </div>
  )
}

export default App
