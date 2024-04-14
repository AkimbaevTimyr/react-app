import { Route, Routes } from "react-router-dom";
import './styles/index.scss'
import { Link } from "react-router-dom";
import { CounterPageAsync } from "./pages/CounterPage/CounterPage.lazy";
import { MainPageAsync } from "./pages/MainPage/MainPage.lazy";
import { Suspense} from "react";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
    const { theme, toogleTheme } = useTheme();

    return(
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toogleTheme}>toogle</button>
            <Link to={'/'}>
                Главная
            </Link>
            <Link to={'/counter'}>
                coUNTER
            </Link>
            <Suspense fallback={<div>Loading ...</div>}>
                <Routes>
                    <Route path="/counter" element={<CounterPageAsync/>}/>
                    <Route path="/" element={<MainPageAsync />} />
                </Routes>
            </Suspense>

        </div>
    )
}

export default App;