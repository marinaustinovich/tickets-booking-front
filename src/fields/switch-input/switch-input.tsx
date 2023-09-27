import React, { useCallback, useEffect, useState } from 'react';
import { FieldRenderProps } from 'react-final-form';

import { classname } from 'utils';

import './switch-input.scss';

const cn = classname('switch-input');

type Props = {
    input: FieldRenderProps<string>['input'];
    meta: FieldRenderProps<string>['meta'];
    label: string;
    disabled?: boolean;
    className?: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};
export const SwitchInput = ({ input, meta, label, disabled, className, Icon }: Props) => {
    const [checked, setChecked] = useState<boolean>(Boolean(input.value));

    const handleChange = useCallback(() => {
        const newValue = !checked;
        setChecked(newValue);
        input.onChange(Number(newValue));
    }, [checked, input]);

    useEffect(() => {
        setChecked(Boolean(input.value));
    }, [input.value]);

    return (
        <label className={cn('', [className])}>
            <Icon />
            <input type='checkbox' name={input.name} checked={checked} onChange={handleChange} disabled={disabled} />
            <span className={cn('label')}>{label}</span>
            <span className={cn('control')}></span>
            {meta.error && meta.touched && <div className={cn('warning')}>{meta.error}</div>}
        </label>
    );
};
