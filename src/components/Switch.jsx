import Moon from "../canvas/Moon"
import Sun from "../canvas/Sun"

const Switch = ({ theme, setTheme }) => {

    const handleChangeTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light") ? "dark" : "light")
    }


    return (
        <div onClick={() => handleChangeTheme()}>
            {
                theme === 'light' ? (
                    <div>
                        <Sun />
                    </div>
                ) : (
                    <div>
                        <Moon />
                    </div>
                )
            }
        </div>
    )
}

export default Switch