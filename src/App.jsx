import { useState } from "react"
import InfoElement from "./components/InfoElement"
import Table from "./components/Table"
import Footer from "./components/Footer"

function App() {

  const [selectedGroup, setSelectedGrooup] = useState('all')

  return (
    <>
      <InfoElement />
      <Table selectedGroup={selectedGroup} />
      <Footer setSelectedGrooup={setSelectedGrooup} />
    </>
  )
}

export default App
