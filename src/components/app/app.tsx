import { classname } from 'utils';
import { LogoIcon } from 'icons';

import './app.scss';

const cn = classname('app');

export const App = () => {

    return (
        <div className={cn()}>
            <header className={cn('header')}>
                <LogoIcon />
                Thicket Booking
            </header>
        </div>
    );
};

export default App;
