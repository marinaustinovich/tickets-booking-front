import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { App } from './components';

import './index.scss';

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error("Cannot find element with id 'root'");
}

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

reportWebVitals();
