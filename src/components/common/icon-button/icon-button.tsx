import React from 'react';

import { classname } from 'utils';

import './icon-button.scss';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    view?: 'default' | 'primary';
    size?: 'default' | 'mini' | 'midi' | 'large' | 'max';
    active?: boolean;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    label?: string;
};

const cn = classname('icon-button');

export const IconButton = (props: Props) => {
    const { className, size, Icon, label, view, ...rest } = props;

    return (
        <div className={cn('', [className])}>
            <button type='button' className={cn('', { size: size || 'default', view: view || 'default' })} {...rest}>
                <Icon />
            </button>
            {label && <div className={cn('label')}>{label}</div>}
        </div>
    );
};
