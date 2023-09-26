import React from 'react';
import { classname } from 'utils';

import './input-error.scss';

const cn = classname('input-error');

type Props = {
    error?: string;
};

export const InputError = ({ error }: Props) => {
    return <div className={cn()}>{error}</div>;
};
