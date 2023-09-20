import { classname } from 'utils';
import { useTranslation } from 'react-i18next';
import { FacebookIcon, GoogleIcon, LinkedInIcon, PlayIcon, TwitterIcon } from 'icons';
import './subscription-block.scss';
import { SubscriptionForm } from './subscription-form';

const cn = classname('subscription-block');

export const SubscriptionBlock = () => {
    const { t } = useTranslation('global');
    const locale = 'footer.subscription.';

    return (
        <div className={cn()}>
            <div className={cn('row')}>
                <div className={cn('title')}>{t(`${locale}title`)}</div>
                <SubscriptionForm />
            </div>
            <div className={cn('row')}>
                <div className={cn('title')}>{t(`${locale}subscription-label`)}</div>
                <div className={cn('list')}>
                    <PlayIcon />
                    <LinkedInIcon />
                    <GoogleIcon />
                    <FacebookIcon />
                    <TwitterIcon />
                </div>
            </div>
        </div>
    );
};

export default SubscriptionBlock;
