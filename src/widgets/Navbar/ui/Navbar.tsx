import styles from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'widgets/LangSwitcher';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({className}) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div>
                <LangSwitcher />
            </div>
            <div className={classNames(styles.links)}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={classNames(styles.mainLink)}>{t('Главная')}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'} >{t('О нас')}</AppLink>
            </div>
        </div>
    )
}