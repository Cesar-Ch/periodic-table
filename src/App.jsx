import { useState } from "react"
import InfoElement from "./components/InfoElement"
import Table from "./components/Table"
import Footer from "./components/Footer"

function App() {

  const [selectedGroup, setSelectedGrooup] = useState('all')

  return (
    <>
      <InfoElement />
      <main className="text-[10px] w-[100%] h-[100vh]  ">
        <Table selectedGroup={selectedGroup} />
        <Footer setSelectedGrooup={setSelectedGrooup} />
      </main>
    </>
  )
}

export default App
