import { classname } from 'utils';
import { Header } from '../header';
import { Footer } from '../footer';

import './app.scss';
import { MainPage } from '../main-page';

const cn = classname('app');

export const App = () => {
    return (
        <div className={cn()}>
            <Header />
            <div className='content'>
                <MainPage />
            </div>
            <Footer />
        </div>
    );
};

export default App;
