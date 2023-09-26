import React, { ReactNode } from 'react';

import { classname } from 'utils';

import './button.scss';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    className?: string;
    view?: 'default' | 'primary' | 'primary-white';
    size?: 'default' | 'large' | 'large-narrow';
    plain?: boolean;
    badgeText?: string;
    active?: boolean;
};

const cn = classname('button');

export const Button = (props: Props) => {
    const { children, className, view, size, plain, active, badgeText, ...rest } = props;

    return (
        <button
            type='button'
            {...rest}
            className={cn(
                '',
                {
                    view: view || 'default',
                    size: size || 'default',
                    plain,
                    active,
                },
                [className],
            )}
        >
            {children}
            {badgeText && <div className={cn('badge')}>{badgeText}</div>}
        </button>
    );
};
