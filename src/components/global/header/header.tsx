import { classname } from 'utils';
import { useTranslation } from 'react-i18next';
import { LogoIcon } from 'icons';

import './header.scss';
import { Navbar } from './navbar';

const cn = classname('header');

export const Header = () => {
    const { t } = useTranslation('global');

    return (
        <header className={cn()}>
            <div className={cn('logo')} ><LogoIcon /> {t('header.title')}</div>
            <Navbar />
        </header>
    );
};

export default Header;
