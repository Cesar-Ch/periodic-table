import AlkaliMetals from "./components/AlkaliMetals"
import AlkalineEarthMetals from "./components/AlkalineEarthMetals"
import Groups from "./components/Groups"

function App() {

  const colors = ["#85E6C5", "#F8485E", "#00C1D4", "#C08261", "#A084E8", "#35A29F", "#EA906C", "#068DA9", "#EA1179", "#B9B4C7"]

  return (
    <div className="p-10 text-[10px] lg:text-[16px] w-[100vw] h-[vh]">
      <main className="flex justify-start">
        <AlkaliMetals color={colors[0]} />
        <AlkalineEarthMetals />

      </main>
      <Groups colors={colors} />
    </div>
  )
}

export default App
