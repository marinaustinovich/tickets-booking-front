import React, { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';

import { classname } from 'utils';

import './link.scss';

type Props = {
    children: ReactNode;
    className?: string;
    to: string;
    as?: string;
};

const cn = classname('link');


export const Link = ({ children, className, to, realTo, ...props }: Props & { realTo?: string }) => {
    const navigate = useNavigate ();

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (realTo) {
            event.preventDefault();
            navigate(realTo);
        }
    };

    return (
        <RouterLink to={to} onClick={handleClick} {...props} className={cn('', [className])}>
            {children}
        </RouterLink>
    );
};

