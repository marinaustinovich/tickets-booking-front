import { classname } from 'utils';
import { useTranslation } from 'react-i18next';
import { EnvelopeIcon, GeoLocationIcon, PhoneIcon, SkypeIcon } from 'icons';

import './contacts-block.scss';

const cn = classname('contacts-block');

export const ContactsBlock = () => {
    const { t } = useTranslation('global');
    const locale = 'footer.contacts.';

    return (
        <div className={cn('')}>
            <div className={cn('title')}>{t(`${locale}title`)}</div>
            <div className={cn('list')}>
                <div className={cn('row')}>
                    <PhoneIcon /> {t(`${locale}phone-number`)}
                </div>
                <div className={cn('row')}>
                    <EnvelopeIcon /> {t(`${locale}email`)}
                </div>
                <div className={cn('row')}>
                    <SkypeIcon /> {t(`${locale}skype`)}
                </div>
                <div className={cn('row')}>
                    <GeoLocationIcon /> {t(`${locale}address`)}
                </div>
            </div>
        </div>
    );
};

export default ContactsBlock;
