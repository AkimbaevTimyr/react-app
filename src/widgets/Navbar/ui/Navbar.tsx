import styles from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({className}) => {
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={classNames(styles.links)}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={classNames(styles.mainLink)}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'} >About</AppLink>
            </div>
        </div>
    )
}