import React from 'react';

import { classname } from 'utils';

import './icon-button.scss';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    size?: 'default' | 'mini' | 'midi' | 'large';
    active?: boolean;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const cn = classname('icon-button');

export const IconButton = (props: Props) => {
    const { className, size, Icon, ...rest } = props;

    return (
        <button type='button' className={cn('', { size: size || 'default' }, [className])} {...rest}>
            <Icon />
        </button>
    );
};
