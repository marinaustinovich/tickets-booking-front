import { classname } from 'utils';
import { Logo } from 'components';
import { Navbar } from './navbar';

import './header.scss';

const cn = classname('header');

export const Header = () => (
    <header className={cn()}>
        <Logo />
        <Navbar />
    </header>
);

export default Header;
