import { Button, StringInput } from 'components';
import React, { ReactNode, useCallback } from 'react';
import { Field, Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';

import { classname } from 'utils';

import './subscription-form.scss';

const cn = classname('subscription-form');

type FormProps = {
    children?: ReactNode;
    className?: string;
};

type SubscriptionFormState = Partial<{
    email: string;
}>;

const formId = 'subscriptionForm';

export const SubscriptionForm = ({ children, ...rest }: FormProps) => {
    const { t } = useTranslation('global');
    const locale = 'footer.subscription.';

    const handleFormSubmit = useCallback((values: SubscriptionFormState) => {
        console.log(values);
    }, []);

    return (
        <Form<SubscriptionFormState>
            onSubmit={handleFormSubmit}
            subscription={{ values: true }}
            render={({ handleSubmit }) => (
                <form autoComplete='off' onSubmit={handleSubmit} id={formId} className={cn()} {...rest}>
                    <div className={cn('row')}>
                        <Field name='email' label={t(`${locale}input-label`)} component={StringInput} placeholder={t(`${locale}placeholder`)} />
                        <Button>{t(`${locale}button-label`)}</Button>
                    </div>
                </form>
            )}
        />
    );
};
