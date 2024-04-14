import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "../lib/ThemeContext"
import React, { FC, useMemo, useState } from "react";
import { Theme } from '../lib/ThemeContext';

interface Props {
    children: React.ReactNode
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC<Props> = ({children}) => {

    const [theme, setTheme] = useState<Theme>(defaultTheme);

    // что бы не было лишней перерисовки компонента
    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme
    }), [theme])

    return(
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;