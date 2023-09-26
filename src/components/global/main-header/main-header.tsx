import { classname } from 'utils';
import { Header } from '../header';
import { TravelDatePicker } from './travel-datepicker';

import './main-header.scss';

const cn = classname('main-header');

export const MainHeader = () => (
    <header className={cn()}>
        <Header />
        <TravelDatePicker />
    </header>
);

export default MainHeader;
