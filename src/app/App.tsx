import { Route, Routes } from "react-router-dom";
import './styles/index.scss'
import { Link } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { Suspense} from "react";
import { useTheme } from "app/providers/ThemeProvider/";
import { classNames } from "shared/lib/classNames/classNames";
import { AboutPage } from "pages/AboutPage";

const App = () => {
    const { theme, toogleTheme } = useTheme();

    return(
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toogleTheme}>toogle</button>
            <Link to={'/'}>
                Главная
            </Link>
            <Link to={'/about'}>
                About
            </Link>
            <Suspense fallback={<div>Loading ...</div>}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </Suspense>

        </div>
    )
}

export default App;