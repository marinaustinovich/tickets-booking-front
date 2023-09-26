import React from 'react';
import { Header, MainContent } from 'components';
import { classname } from 'utils';

import './main.scss';

const cn = classname('main-page');

const MainPage = () => {
  
    return (
        <div className={cn()}>
            <Header />
            <MainContent />
        </div>
    );
};

export default MainPage;
