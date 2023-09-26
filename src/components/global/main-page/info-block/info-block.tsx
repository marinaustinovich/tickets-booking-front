import { classname } from 'utils';
import { useTranslation } from 'react-i18next';

import './info-block.scss';
import { UrlsEnum } from 'enums';

const cn = classname('info-block');

export const InfoBlock = () => {
    const { t } = useTranslation('global');
    const locale = 'main.info-block.';

    return (
        <section className={cn()} id={UrlsEnum.ABOUT_US}>
            <h2>{t(`${locale}title`)}</h2>
            <div className={cn('content')}>
                <p>{t(`${locale}content.greetings`)}</p>
                <p>{t(`${locale}content.warning-info`)}</p>
                <p className={cn('online-ticket-ordering')}>{t(`${locale}content.online-ticket-ordering-advantages`)}</p>
            </div>
        </section>
    );
};

export default InfoBlock;
