import React, { ReactNode } from 'react';

import { classname } from 'utils';

import './icon-block.scss';

type Props = {
    children: ReactNode;
    label?: string;
};

const cn = classname('icon-block');

export const IconBlock = ({ children, label }: Props) => {
    return (
        <div className={cn()}>
            {children}
            <div className={cn('label')}>{label}</div>
        </div>
    );
};
