import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { classname } from 'utils';
import { Footer } from '../footer';
import MainPage from 'pages/main/main';

import './app.scss';

const cn = classname('app');

export const App = () => (
    <div className={cn()}>
        <Routes>
            <Route path='/' element={<MainPage />} />
        </Routes>
        <Footer />
    </div>
);

export default App;
