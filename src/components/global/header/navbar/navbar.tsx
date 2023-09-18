import { classname } from 'utils';
import './navbar.scss';
import { Link } from 'components';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

type Route = {
    name: string;
    href: string;
    as: string;
};

const cn = classname('navbar');

export const Navbar = () => {
    const router = useLocation();
    const { pathname } = router;
    const { t } = useTranslation('global');

    const routes = useMemo(
        (): Route[] => [
            { name: t('navbar.about-us-label'), href: '/pages/about-us', as: '/tickets/about-us' },
            { name: t('navbar.how-it-works-label'), href: '/pages/works', as: '/tickets/how-it-works' },
            { name: t('navbar.reviews-label'), href: '/pages/reviews', as: '/tickets/reviews' },
            { name: t('navbar.contacts-label'), href: '/pages/contacts', as: '/tickets/contacts' },
        ],
        [t],
    );

    return (
        <div className={cn()}>
            {routes.map(({ name, href, as }) => (
                <Link key={name} to={href} realTo={as} className={cn('link', { active: href === pathname })}>
                    {name}
                </Link>
            ))}
        </div>
    );
};

export default Navbar;
