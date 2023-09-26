import React from 'react';
import { MainHeader, MainContent } from 'components';
import { classname } from 'utils';

import './main.scss';

const cn = classname('main-page');

const MainPage = () => (
    <div className={cn()}>
        <MainHeader />
        <MainContent />
    </div>
);

export default MainPage;
