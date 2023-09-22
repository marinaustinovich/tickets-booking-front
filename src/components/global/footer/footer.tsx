import { classname } from 'utils';

import './footer.scss';
import { Branding } from './branding';
import { ContactsBlock } from './contacts-block';
import { SubscriptionBlock } from './subscription-block';

const cn = classname('footer');

export const Footer = () => {
    return (
        <footer className={cn()}>
            <div className={cn('contacts-subscription')}>
                <ContactsBlock />
                <SubscriptionBlock />
            </div>
            <Branding className={cn('branding')} />
        </footer>
    );
};

export default Footer;
