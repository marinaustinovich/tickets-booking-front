import React, { useState } from 'react';
import { classname } from 'utils';
import { RubIcon } from 'icons';

import './dropdown.scss';

export type DropdownOption = {
    label: string;
    content: number;
};

type Props = {
    children: React.ReactNode;
    className?: string;
    options: DropdownOption[];
};

const cn = classname('dropdown');

export const Dropdown = ({ children, options }: Props) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleVisibility = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className={cn('')}>
            <div onClick={toggleVisibility}> {children}</div>
            {isDropdownOpen && (
                <div className={cn('options', { open: isDropdownOpen })}>
                    {options.map((option: DropdownOption) => (
                        <div key={option.label} className={cn('option')}>
                            <span className={cn('label')}>{option.label}</span>
                            <span className={cn('value')}>{option.content}</span>
                            <RubIcon />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
