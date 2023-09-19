
const Switch = ({ theme, setTheme }) => {

    const handleChangeTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light") ? "dark" : "light")
    }


    return (
        <div onClick={() => handleChangeTheme()}>
            {
                theme === 'light' ? (
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="icon icon-tabler icon-tabler-sun-filled"
                            viewBox="0 0 24 24"
                        >
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <path
                                fill="#ff8f00"
                                stroke="none"
                                d="M12 19a1 1 0 01.993.883L13 20v1a1 1 0 01-1.993.117L11 21v-1a1 1 0 011-1zM18.313 16.91l.094.083.7.7a1 1 0 01-1.32 1.497l-.094-.083-.7-.7a1 1 0 011.218-1.567l.102.07zM7.007 16.993a1 1 0 01.083 1.32l-.083.094-.7.7a1 1 0 01-1.497-1.32l.083-.094.7-.7a1 1 0 011.414 0zM4 11a1 1 0 01.117 1.993L4 13H3a1 1 0 01-.117-1.993L3 11h1zM21 11a1 1 0 01.117 1.993L21 13h-1a1 1 0 01-.117-1.993L20 11h1zM6.213 4.81l.094.083.7.7a1 1 0 01-1.32 1.497l-.094-.083-.7-.7A1 1 0 016.11 4.74l.102.07zM19.107 4.893a1 1 0 01.083 1.32l-.083.094-.7.7a1 1 0 01-1.497-1.32l.083-.094.7-.7a1 1 0 011.414 0zM12 2a1 1 0 01.993.883L13 3v1a1 1 0 01-1.993.117L11 4V3a1 1 0 011-1zM12 7a5 5 0 11-4.995 5.217L7 12l.005-.217A5 5 0 0112 7z"
                            ></path>
                        </svg>
                    </div>
                ) : (
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="icon icon-tabler icon-tabler-moon-filled"
                            viewBox="0 0 24 24"
                        >
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <path
                                fill="#586be7"
                                stroke="none"
                                d="M12 1.992a10 10 0 109.236 13.838c.341-.82-.476-1.644-1.298-1.31a6.5 6.5 0 01-6.864-10.787l.077-.08c.551-.63.113-1.653-.758-1.653h-.266l-.068-.006-.06-.002z"
                            ></path>
                        </svg>
                    </div>
                )
            }



        </div>
    )
}

export default Switch