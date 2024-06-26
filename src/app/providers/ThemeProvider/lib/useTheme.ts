import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";
import { useContext } from "react";


interface UserThemeResult {
    toogleTheme: () => void;
    theme: Theme
}

export function useTheme(): UserThemeResult {
    const {theme, setTheme} = useContext(ThemeContext)

    const toogleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return {
        theme, 
        toogleTheme
    }
}