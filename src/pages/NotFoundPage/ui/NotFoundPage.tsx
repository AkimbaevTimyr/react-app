import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import styles from './NotFoundPage.module.scss';


export const NotFoundPage = () => {
    const {t} = useTranslation('about');
    return(
        <div className={classNames(styles.notFoundPage, {}, [])}>
            {t('Страница не найдена')}
        </div>
    )
}

