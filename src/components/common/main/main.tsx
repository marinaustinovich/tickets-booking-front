import React, { ReactNode } from 'react';
import { classname } from 'utils';

import './main.scss';

type Props = {
    children: ReactNode;
};

const cn = classname('main');

export const Main = ({ children }: Props) => {
    return <main className={cn()}>{children}</main>;
};
