import Actinides from "./components/Actinides"
import AlkaliMetals from "./components/AlkaliMetals"
import AlkalineEarthMetals from "./components/AlkalineEarthMetals"
import Boroids from "./components/Boroids"
import Carbonoids from "./components/Carbonoids"
import Chalcoids from "./components/Chalcoids"
import FamilyChromium from "./components/FamilyChromium"
import FamilyCobalt from "./components/FamilyCobalt"
import FamilyCopper from "./components/FamilyCopper"
import FamilyEscandium from "./components/FamilyEscandium"
import FamilyIron from "./components/FamilyIron"
import FamilyManganese from "./components/FamilyManganese"
import FamilyNickel from "./components/FamilyNickel"
import FamilyTitanium from "./components/FamilyTitanium"
import FamilyVanadium from "./components/FamilyVanadium"
import FamilyZinc from "./components/FamilyZinc"
import Groups from "./components/Groups"
import Halogens from "./components/Halogens"
import Lanthanoids from "./components/Lanthanoids"
import Nitrogenoids from "./components/Nitrogenoids"
import NobleGases from "./components/NobleGases"

function App() {

  const colors = ["#85E6C5", "#F8485E", "#00C1D4", "#C08261", "#A084E8", "#35A29F", "#EA906C", "#068DA9", "#EA1179", "#B9B4C7"]

  return (
    <div className="p-10 text-[10px] lg:text-[16px] w-[100vw] h-[vh]">
      <main className="flex justify-start">
        <AlkaliMetals color={colors[0]} />
        <AlkalineEarthMetals />
        <FamilyEscandium />
        <FamilyTitanium />
        <FamilyVanadium />
        <FamilyChromium />
        <FamilyManganese />
        <FamilyIron />
        <FamilyCobalt />
        <FamilyNickel />
        <FamilyCopper />
        <FamilyZinc />
        <Boroids />
        <Carbonoids />
        <Nitrogenoids />
        <Chalcoids />
        <Halogens />
        <NobleGases />
      </main>
      <section className="flex justify-start ml-[160px] mt-5 flex-wrap">
        <Lanthanoids />
        <Actinides />
      </section>
      <Groups colors={colors} />
    </div>
  )
}

export default App
