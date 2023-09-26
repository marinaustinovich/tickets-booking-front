import { classname } from 'utils';

import './footer.scss';
import { Branding } from './branding';
import { ContactsBlock } from './contacts-block';
import { SubscriptionBlock } from './subscription-block';
import { UrlsEnum } from 'enums';

const cn = classname('footer');

export const Footer = () => {
    return (
        <footer className={cn()} id={UrlsEnum.CONTACTS}>
            <div className={cn('contacts-subscription')}>
                <ContactsBlock />
                <SubscriptionBlock />
            </div>
            <Branding className={cn('branding')} />
        </footer>
    );
};

export default Footer;
