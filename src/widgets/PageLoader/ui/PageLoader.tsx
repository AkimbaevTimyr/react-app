import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Loader } from 'shared/ui/Loader';
import styles from './PageLoader.module.scss'

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({className}) => {
    return (
        <div className={classNames(styles.pageLoader, {}, [className])}>
            <Loader />
        </div>
    )
}