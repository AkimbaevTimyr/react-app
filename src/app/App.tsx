import './styles/index.scss'
import { useTheme } from "app/providers/ThemeProvider/";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import { Navbar } from 'widgets/Navbar';

const App = () => {
    const { theme, toogleTheme } = useTheme();

    return(
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <button onClick={toogleTheme}>toogle</button>
            <AppRouter />
        </div>
    )
}

export default App;