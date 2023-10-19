import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-final-form';
import { classname } from 'utils';
import { DocumentTypeSelect, FormControl, InputLabel, FieldPrefixContext, PrefixedField, StringInput } from 'fields';
import { required } from 'validators';

import './person-details-block.scss';
import { DocumentTypeEnum } from 'enums';

const cn = classname('person-details-block');

export const PersonDetailsBlock = () => {
    const { t } = useTranslation('common');
    const locale = 'commons.person-details-block';
    const form = useForm();
    const prefix = useContext(FieldPrefixContext);
    const { documentType } = form.getState().values[prefix] || {};

    const isSelectedPassport = !documentType || documentType === DocumentTypeEnum.PASSPORT;

    return (
        <div className={cn('', { view: isSelectedPassport ? 'default' : 'long' })}>
            <FormControl className={cn('document-type')}>
                <InputLabel size='mini' required={true}>
                    {t(`${locale}.document-type-label`)}
                </InputLabel>
                <PrefixedField name='documentType' component={DocumentTypeSelect} placeholder={t(`${locale}.document-type-placeholder`)} />
            </FormControl>
            {isSelectedPassport ? (
                <>
                    <FormControl className={cn('document-number')}>
                        <InputLabel size='mini' required={true}>
                            {t(`${locale}.document-number-label`)}
                        </InputLabel>
                        <PrefixedField
                            name='documentNumber'
                            component={StringInput}
                            inputSize='medium'
                            placeholder={t(`${locale}.document-number-placeholder`)}
                            validate={required}
                        />
                    </FormControl>
                    <FormControl className={cn('document-series')}>
                        <InputLabel size='mini' required={true}>
                            {t(`${locale}.document-series-label`)}
                        </InputLabel>
                        <PrefixedField
                            name='documentSeries'
                            component={StringInput}
                            inputSize='medium'
                            placeholder={t(`${locale}.document-series-placeholder`)}
                            validate={required}
                        />
                    </FormControl>
                </>
            ) : (
                <FormControl className={cn('document-data')}>
                    <InputLabel size='mini' required={true}>
                        {t(`${locale}.document-number-label`)}
                    </InputLabel>
                    <PrefixedField
                        name='documentData'
                        component={StringInput}
                        inputSize='medium'
                        placeholder={t(`${locale}.document-data-placeholder`)}
                        validate={required}
                    />
                </FormControl>
            )}
        </div>
    );
};
