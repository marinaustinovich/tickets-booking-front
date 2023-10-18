import React, { ReactNode } from 'react';
import { classname } from 'utils';

import './paper.scss';

type Props = {
    className?: string;
    title?: string;
    actions?: ReactNode;
    body?: ReactNode;
    footer?: ReactNode;
    header?: ReactNode;
};

const cn = classname('paper');

export const Paper = ({ title, actions, body, footer, className, header }: Props) => (
    <div className={cn('', [className])}>
        {(header || title) && (
            <div className={cn('header')}>
                {title && <span className={cn('title')}>{title}</span>}
                {header}
                {actions}
            </div>
        )}
        <div className={cn('body')}>{body}</div>
        {footer && <div className={cn('footer')}>{footer}</div>}
    </div>
);
