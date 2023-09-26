import { Button } from 'components';
import React, { ReactNode, useCallback } from 'react';
import { Field, Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { StringInput } from 'fields';
import { classname } from 'utils';
import { fetchSubscribe } from 'api/subscribe';

import './subscription-form.scss';

const cn = classname('subscription-form');

type FormProps = {
    children?: ReactNode;
    className?: string;
};

type SubscriptionFormState = {
    email: string;
};

const formId = 'subscriptionForm';

export const SubscriptionForm = ({ children, ...rest }: FormProps) => {
    const { t } = useTranslation('global');
    const locale = 'footer.subscription.';

    const handleFormSubmit = useCallback((values: SubscriptionFormState) => {
        fetchSubscribe(values);
    }, []);

    return (
        <Form<SubscriptionFormState>
            onSubmit={async (values, form) => {
                await handleFormSubmit(values);
                form.reset();
            }}
            subscription={{ values: true }}
            render={({ handleSubmit }) => (
                <form autoComplete='off' onSubmit={handleSubmit} id={formId} className={cn()} {...rest}>
                    <div className={cn('row')}>
                        <Field name='email' label={t(`${locale}input-label`)} component={StringInput} placeholder={t(`${locale}placeholder`)} />
                        <Button type='submit'>{t(`${locale}button-label`)}</Button>
                    </div>
                </form>
            )}
        />
    );
};
