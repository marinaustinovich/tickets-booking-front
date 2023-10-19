import React, { useMemo } from 'react';
import { FieldRenderProps } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { DocumentTypeEnum } from 'enums';
import { SelectField } from 'fields';
import { classname } from 'utils';

const cn = classname('document-type-select');

export const DocumentTypeSelect = (props: FieldRenderProps<string>) => {
    const { t } = useTranslation('common');

    const options = useMemo(
        () =>
            Object.values(DocumentTypeEnum).map(type => ({
                label: t(`commons.document-type-select.${type}`),
                value: type,
            })),
        [t],
    );

    return <SelectField options={options} {...props} className={cn('')} />;
};
