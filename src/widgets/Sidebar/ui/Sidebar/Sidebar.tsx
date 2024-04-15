import { classNames } from "shared/lib/classNames/classNames";
import styles from './Sidebar.module.scss'
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { Button } from "shared/ui/Button/Button";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return(
        <div 
            className={classNames(styles.sidebar, {[styles.collapsed]: collapsed}, [className])}
        >
            <Button
                onClick={onToggle}
            >
                Toogle
            </Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    )
}