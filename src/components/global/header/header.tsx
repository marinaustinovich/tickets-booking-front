import { classname } from 'utils';
import { Logo } from 'components';
import { Navbar } from './navbar';
import { TravelDatePicker } from './travel-datepicker';

import './header.scss';

const cn = classname('header');

export const Header = () => (
    <header className={cn()}>
        <Logo />
        <Navbar />
        <TravelDatePicker />
    </header>
);

export default Header;
