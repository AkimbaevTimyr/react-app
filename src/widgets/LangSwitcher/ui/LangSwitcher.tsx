import { classNames } from "shared/lib/classNames/classNames"
import { Link, LinkProps } from "react-router-dom"
import React, { FC } from "react";
import styles from './LangSwitcher.module.scss'
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

interface LangSwitcherProps{
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const {t, i18n} = useTranslation();
    
    const {className} = props;

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return(
        <Button 
            className={classNames(styles.langSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
    )
}