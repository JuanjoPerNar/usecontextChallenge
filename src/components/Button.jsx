import React from "react";
import { useTheme } from "../themes/ThemeContext";

const Button = () => {
    const {theme, changeTheme} = useTheme()
    
    const newTheme = theme === 'light' ? 'dark' : 'light'

    const handleChangeTheme = () => {
        changeTheme(newTheme)
    }

    return (
        <>
            <button onClick={handleChangeTheme}>
                Cambiar a {newTheme}
            </button>
        </>
    )
}

export default Button