import React, {ReactNode} from 'react';
import { classname } from 'utils';

import './tooltip.scss'; 

type TooltipProps = {
    children: ReactNode;
    text: string;
};

const cn = classname('tooltip');

export const Tooltip = ({ children, text }: TooltipProps) => {
    return (
        <div className={cn()}>
            {children}
            <span className={cn('text')}>{text}</span>
        </div>
    );
};
