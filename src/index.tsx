import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { App } from './components';
import { initializeI18next } from './i18n';
import { I18nextProvider } from 'react-i18next';

import './index.scss';
import i18next from 'i18next';

initializeI18next()
    .then(() => {
        const rootElement = document.getElementById('root');

        if (!rootElement) {
            throw new Error("Cannot find element with id 'root'");
        }
        
        const root = ReactDOM.createRoot(rootElement);
        root.render(
            <I18nextProvider i18n={i18next}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </I18nextProvider>,
        );
    })
    .catch(error => {
        console.error('Failed to initialize i18next:', error);
    });

reportWebVitals();
