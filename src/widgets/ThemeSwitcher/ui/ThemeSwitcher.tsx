import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
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
        <Button 
            onClick={toogleTheme}
            theme={ThemeButton.CLEAR}
            className="buttonBorder"
        >
            { theme === Theme.LIGHT ? <Light /> : <Dark /> }
        </Button>
    )
}