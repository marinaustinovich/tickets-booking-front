import React, { useState, useRef, useCallback } from 'react';
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

export const Range = ({ input, min, max, size = 'medium' }: Props) => {
    const [minValue, set_minValue] = useState(min);
    const [maxValue, set_maxValue] = useState(max);
    const prevMinValue = useRef(min);
    const prevMaxValue = useRef(max);

    const handleInput = useCallback(
        (e: ChangeResult) => {
            if (e.minValue !== prevMinValue.current || e.maxValue !== prevMaxValue.current) {
                set_minValue(e.minValue);
                set_maxValue(e.maxValue);
                input.onChange([e.minValue, e.maxValue]);
                prevMinValue.current = e.minValue;
                prevMaxValue.current = e.maxValue;
            }
        },
        [input],
    );

    return (
        <div className={cn('', { size })}>
            <MultiRangeSlider min={min} max={max} step={1} minValue={minValue} maxValue={maxValue} onInput={e => handleInput(e)} />
        </div>
    );
};
