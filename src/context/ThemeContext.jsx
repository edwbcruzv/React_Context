import React, { useContext, useState } from 'react'


const ThemeContext = React.createContext()
const initialTheme = "light"
function ThemeProvider({children}) {
    const [theme, setTheme] = useState(initialTheme);

    function handleTheme(e) {
        setTheme(e.target.value)
    }

    const data={theme,handleTheme}

    return(
        <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
    )
}

export {ThemeProvider}
export default ThemeContext