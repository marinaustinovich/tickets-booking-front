import React from 'react';

import { classname } from 'utils';

import './input-label.scss';

const cn = classname('input-label');

type Props = {
    children: React.ReactNode;
    required?: boolean;
    className?: string;
};

export const InputLabel = ({ required, children, className }: Props) => (
    <label className={cn('', { required }, [className])}>
        {required && <span>*</span>}
        <span className={cn('text')}>{children}</span>
    </label>
);
