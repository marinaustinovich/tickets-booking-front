import React, { MouseEventHandler, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ErrorIcon, InfoIcon } from 'icons';
import { classname } from 'utils';
import { Button } from '../button';
import { useAppDispatch, useAppSelector } from 'store';
import { commonActions } from 'store/common/slice';
import { modalSelector } from 'store/common';

import './modal.scss';

const cn = classname('modal');

export const Modal = () => {
    const { t } = useTranslation('common');
    const dispatch = useAppDispatch();
    const { type, content, isVisible } = useAppSelector(modalSelector);
    const isError = type === 'error';

    const onClose = useCallback(() => dispatch(commonActions.setModalProps({ isVisible: false, type: 'info', content: '' })), [dispatch]);

    const onClickOutsideModal: MouseEventHandler<HTMLDivElement> = useCallback(
        event => {
            const target = event.target as HTMLElement;

            if (target.className?.includes?.(cn('container'))) {
                onClose();
            }
        },
        [onClose],
    );

    return (
        <div className={cn('', { error: isError, open: isVisible })} onClick={onClickOutsideModal}>
            <div className={cn('header')}>{isError ? <ErrorIcon /> : <InfoIcon />}</div>
            <div className={cn('body')}>{content}</div>
            <div className={cn('footer')}>
                <Button onClick={onClose} view='default-white' size='large'>
                    {t('commons.modal.button-label')}
                </Button>
            </div>
        </div>
    );
};
