import { classname } from 'utils';
import './navbar.scss';
import { Link } from 'components';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { UrlsEnum } from 'enums';

type Route = {
    name: string;
    href: string;
};

const cn = classname('navbar');

export const Navbar = () => {
    const router = useLocation();
    const { pathname } = router;
    const { t } = useTranslation('global');

    const routes = useMemo(
        (): Route[] => [
            { name: t('navbar.about-us-label'), href: `#${UrlsEnum.ABOUT_US}` },
            { name: t('navbar.how-it-works-label'), href: `#${UrlsEnum.HOW_IT_WORKS}` },
            { name: t('navbar.reviews-label'), href: `#${UrlsEnum.REVIEWS}` },
            { name: t('navbar.contacts-label'), href: `#${UrlsEnum.CONTACTS}` },
        ],
        [t],
    );

    const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        event.preventDefault();

        const anchor = href.slice(1);
        const anchorElement = document.getElementById(anchor);

        if (anchorElement) {
            anchorElement.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className={cn()}>
            {routes.map(({ name, href }) => (
                <Link key={name} to={href} className={cn('link', { active: href === pathname })} onClick={event => handleAnchorClick(event, href)}>
                    {name}
                </Link>
            ))}
        </div>
    );
};

export default Navbar;
