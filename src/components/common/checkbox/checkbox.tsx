import React, { useCallback, useEffect, useState } from 'react';
import { CheckIconDefault, CheckIconMini } from 'icons';
import { classname } from 'utils';

import './checkbox.scss';

type CheckboxProps = {
    checked?: boolean;
    onChange?: (value: boolean) => void;
    size?: 'default' | 'mini';
    className?: string;
};

const cn = classname('checkbox');

export const Checkbox = (props: CheckboxProps) => {
    const { size = 'default', checked, className, onChange } = props;
    const [value, setValue] = useState(checked);

    useEffect(() => setValue(checked), [checked]);

    const onChangeHandler = useCallback(() => {
        const newValue = !value;

        setValue(newValue);
        onChange?.(newValue);
    }, [onChange, value]);

    return (
        <div className={cn('', { checked: value, size }, [className])} onClick={onChangeHandler}>
            {size === 'default' && <CheckIconDefault />}
            {size === 'mini' && <CheckIconMini />}
        </div>
    );
};
