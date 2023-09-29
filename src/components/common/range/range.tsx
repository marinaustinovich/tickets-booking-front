import React, { useState, useEffect, useCallback } from 'react';
import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react';
import { FieldRenderProps } from 'react-final-form';

import { classname } from 'utils';

import './range.scss';

type Props = {
    input: FieldRenderProps<number>['input'];
    meta: FieldRenderProps<string>['meta'];
    min: number;
    max: number;
    size?: 'small' | 'medium' | 'large';
};

const cn = classname('range');

export const Range = ({ min, max, size = 'medium' }: Props) => {
    const [minValue, set_minValue] = useState(min);
    const [maxValue, set_maxValue] = useState(max);

    useEffect(() => {
        set_minValue(min);
        set_maxValue(max);
    }, [min, max]);
    
    const handleInput = useCallback((e: ChangeResult) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    }, []);

    return (
        <div className={cn('', {size: size})}>
            <MultiRangeSlider min={min} max={max} step={1} minValue={minValue} maxValue={maxValue} onInput={e => handleInput(e)} />
        </div>
    );
};
