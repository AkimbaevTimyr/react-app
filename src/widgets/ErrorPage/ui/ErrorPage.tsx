import { classNames } from "shared/lib/classNames/classNames"
import styles from './ErrorPage.module.scss'
import { useTranslation } from "react-i18next"

export const ErrorPage = () => {
    const {t} = useTranslation();

    const reload = () => {
        location.reload()
    }

    return (
        <div className={classNames(styles.errorPage)}>
            <h2>{t('Произошла ошибка')}</h2>
            <button onClick={reload}>{t('Перезагрузите страницу')}</button>
        </div>
    )
}