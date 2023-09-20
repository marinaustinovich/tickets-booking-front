import { classname } from 'utils';
import { Header } from '../header';
import { Footer } from '../footer';


import './app.scss';

const cn = classname('app');

export const App = () => {
    return (
        <div className={cn()}>
            <Header />
            <div className='content'></div>
            <Footer />
        </div>
    );
};

export default App;
