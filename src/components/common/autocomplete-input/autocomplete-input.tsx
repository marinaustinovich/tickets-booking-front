import React, { useCallback, useMemo, useState } from 'react';
import { classname, toHeaderCase } from 'utils';

import { Input, InputProps } from '../input';

import './autocomplete-input.scss';

export type AutocompleteInputProps = InputProps & {
    className?: string;
    suggestions: string[];
    /**
     * Wether autocomplete component filters suggestions based on the input value?
     */
    automaticallyFilterSuggestions?: boolean;
    value?: string;
    onChangeText?: (value: string) => void;
    onSelectSuggestion?: (value: string) => void;
};

const cn = classname('autocomplete-input');

export const AutocompleteInput = ({
    className,
    suggestions,
    onChangeText,
    onSelectSuggestion,
    automaticallyFilterSuggestions = false,
    value,
    ...rest
}: AutocompleteInputProps) => {
    const [inputValue, setInputValue] = useState(value?.toString() || '');
    const [areSuggestionsOpen, setAreSuggestionsOpen] = useState(false);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const text = e.target.value;

            setInputValue(text);
            setAreSuggestionsOpen(!!text);
            onChangeText?.(text);
        },
        [onChangeText],
    );

    const handleSuggestionClick = useCallback(
        (suggestion: string) => {
            setInputValue(suggestion);
            setAreSuggestionsOpen(false);
            onSelectSuggestion?.(suggestion);
        },
        [onSelectSuggestion],
    );


    const filteredSuggestions = useMemo(() => {
        const rawSuggestions = automaticallyFilterSuggestions
            ? suggestions.filter(suggestion => suggestion.toLowerCase().includes(inputValue.toLowerCase()))
            : suggestions;

        return rawSuggestions.map(suggestion => toHeaderCase(suggestion));
    }, [inputValue, automaticallyFilterSuggestions, suggestions]);

 
    const hasSuggestions = filteredSuggestions.length > 0;

    return (
        <div className={cn('', { className })}>
            <Input itemID='browsers' value={value ?? inputValue} onChange={handleChange} {...rest} autoComplete='off' />
            {areSuggestionsOpen && hasSuggestions && (
                <div className={cn('suggestions-container')}>
                    {filteredSuggestions.map(suggestion => (
                        <div tabIndex={0} key={suggestion} className={cn('suggestion')} onClick={() => handleSuggestionClick(suggestion)}>
                            {suggestion}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
