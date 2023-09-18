import { classname } from 'utils';
import { Header } from '../header';

import './app.scss';

const cn = classname('app');

export const App = () => {
    return (
        <div className={cn()}>
            <Header />
        </div>
    );
};

export default App;
