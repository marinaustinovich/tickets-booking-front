import React from 'react';
import { useTranslation } from 'react-i18next';
import { classname } from 'utils';
import { AgeSelect, LabeledCheckboxInput, FormControl, GenderRadioGroup, InputLabel, PrefixedField, StringInput } from 'fields';

import './personal-info-block.scss';

const cn = classname('personal-info-block');

export const PersonInfoBlock = () => {
    const { t } = useTranslation('common');
    const locale = 'commons.personal-info-block';

    return (
        <div className={cn('')}>
            <FormControl className={cn('age')}>
                <PrefixedField name='isAdult' component={AgeSelect} parse={value => value} />
            </FormControl>
            <FormControl className={cn('last-name')}>
                <InputLabel size='mini'>{t(`${locale}.last-name-label`)}</InputLabel>
                <PrefixedField name='lastName' component={StringInput} inputSize='medium' placeholder={t(`${locale}.last-name-placeholder`)} />
            </FormControl>
            <FormControl className={cn('first-name')}>
                <InputLabel size='mini'>{t(`${locale}.first-name-label`)}</InputLabel>
                <PrefixedField name='firstName' component={StringInput} inputSize='medium' placeholder={t(`${locale}.first-name-placeholder`)} />
            </FormControl>
            <FormControl className={cn('patronymic')}>
                <InputLabel size='mini'>{t(`${locale}.patronymic-label`)}</InputLabel>
                <PrefixedField name='patronymic' component={StringInput} inputSize='medium' placeholder={t(`${locale}.patronymic-placeholder`)} />
            </FormControl>
            <FormControl className={cn('gender')}>
                <InputLabel size='mini'>{t(`${locale}.gender-label`)}</InputLabel>
                <PrefixedField name='gender' component={GenderRadioGroup} placeholder={t(`${locale}.birthday-placeholder`)} />
            </FormControl>
            <FormControl className={cn('birthday')}>
                <InputLabel size='mini'>{t(`${locale}.birthday-label`)}</InputLabel>
                <PrefixedField name='birthday' component={StringInput} inputSize='medium' placeholder={t(`${locale}.birthday-placeholder`)} />
            </FormControl>
            <FormControl className={cn('limited-mobility')}>
                <PrefixedField name='limitedMobility' component={LabeledCheckboxInput} label={t(`${locale}.limited-mobility-label`)} />
            </FormControl>
        </div>
    );
};
