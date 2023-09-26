import React, { useCallback } from 'react';
import { FieldRenderProps } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { AutocompleteInput, InputError, InputProps } from 'components';
import { classname } from 'utils';

import './autocomplete-string-input.scss';

type Props = InputProps & {
    input: FieldRenderProps<string>['input'];
    meta: FieldRenderProps<string>['meta'];
    suggestions: string[];
    automaticallyFilterSuggestions?: boolean;
    onChangeText?: (value: string) => void;
    onSelectSuggestion?: (value: string) => void;
};

const cn = classname('autocomplete-string-input');

export const AutocompleteStringInput = (props: Props) => {
    const { t } = useTranslation('common');
    const { input, meta, className, onChangeText, onSelectSuggestion, suggestions, automaticallyFilterSuggestions, placeholder } = props;
    const { active, touched, submitError, dirtySinceLastSubmit } = meta;
    const { name, onChange, value } = input;

    const error = meta.error || (!dirtySinceLastSubmit && submitError);
    const isErrorVisible = !active && touched && !!error;

    const handleChange = useCallback(
        (text: string) => {
            onChangeText?.(text);
            onChange(text);
        },
        [onChange, onChangeText],
    );

    const handleSelectSuggestion = useCallback(
        (value: string) => {
            onSelectSuggestion?.(value);
            onChange(value);
        },
        [onChange, onSelectSuggestion],
    );

    return (
        <div className={cn('', [className])}>
            <AutocompleteInput
                name={name}
                suggestions={suggestions}
                automaticallyFilterSuggestions={automaticallyFilterSuggestions}
                onChangeText={handleChange}
                onSelectSuggestion={handleSelectSuggestion}
                placeholder={placeholder === undefined ? t('commons.placeholder') : placeholder}
                value={value}
            />
           {isErrorVisible && <InputError error={error}/>}
        </div>
    );
};
