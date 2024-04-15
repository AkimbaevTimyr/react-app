import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import styles from './ThemeSwitcher.module.scss'
import Light from 'shared/assets/icons/light.svg';
import Dark from 'shared/assets/icons/dark.svg';
import { Theme } from "app/providers/ThemeProvider";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const { toogleTheme, theme } = useTheme();
    
    return(
        // <button 
        //     className={classNames(styles.themeSwitcher)} 
        //     onClick={toogleTheme}
        // >
        //     { theme === Theme.LIGHT ? <Dark /> : <Light /> }
        // </button>
        <Button 
            onClick={toogleTheme}
            theme={ThemeButton.CLEAR}
            className="buttonBorder"
        >
            { theme === Theme.LIGHT ? <Dark /> : <Light /> }
        </Button>
    )
}