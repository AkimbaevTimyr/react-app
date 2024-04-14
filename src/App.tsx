import { Route, Routes } from "react-router-dom";
import './index.scss'
import { Link } from "react-router-dom";
import { CounterPageAsync } from "./pages/CounterPage/CounterPage.lazy";
import { MainPageAsync } from "./pages/MainPage/MainPage.lazy";
import { Suspense } from "react";


const App = () => {
    return(
        <div className="app">
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