import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ThemeProdiver from './theme/ThemeProvider';

const rootElement = document.getElementById('root');

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProdiver>
                <App />
            </ThemeProdiver>
        </BrowserRouter>,
    </React.StrictMode>,
    rootElement
);