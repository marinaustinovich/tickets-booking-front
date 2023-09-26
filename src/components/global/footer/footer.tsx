import React, { useCallback, useState } from 'react';
import { Branding } from './branding';
import { ContactsBlock } from './contacts-block';
import { SubscriptionBlock } from './subscription-block';
import { UrlsEnum } from 'enums';
import { classname } from 'utils';

import './footer.scss';

const cn = classname('footer');

export const Footer = () => {
    const [showContacts, setShowContacts] = useState(false);

    const handleShowContacts = useCallback(() => {
        setShowContacts(prevState => !prevState);
    }, []);

    return (
        <footer className={cn()} id={UrlsEnum.CONTACTS}>
            {showContacts && (
                <div className={cn('contacts-subscription')}>
                    <ContactsBlock />
                    <SubscriptionBlock />
                </div>
            )}
            <Branding className={cn('branding')} onShowContacts={handleShowContacts} />
        </footer>
    );
};
