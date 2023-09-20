import { classname } from 'utils';
// import { useTranslation } from 'react-i18next';

import './footer.scss';
import { Branding } from './branding';
import { ContactsBlock } from './contacts-block';
import { SubscriptionBlock } from './subscription-block';

const cn = classname('footer');

export const Footer = () => {
    // const { t } = useTranslation('global');

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
