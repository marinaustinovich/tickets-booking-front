import React from 'react';

import { classname } from 'utils';

import './input-label.scss';

const cn = classname('input-label');

type Props = {
    children: React.ReactNode;
    required?: boolean;
    className?: string;
    size?: 'mini';
};

export const InputLabel = ({ required, children, className, size }: Props) => (
    <label className={cn('', { required, size }, [className])}>
        {required && <span>*</span>}
        <span className={cn('text')}>{children}</span>
    </label>
);
