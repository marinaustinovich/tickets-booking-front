import { classname } from 'utils';
import { useTranslation } from 'react-i18next';

import './how-works-block.scss';
import { Button, IconBlock } from 'components';
import { CityIcon, ComputerIcon, GlobeIcon } from 'icons';
import { UrlsEnum } from 'enums';

const cn = classname('how-works-block');

export const HowWorksBlock = () => {
    const { t } = useTranslation('global');
    const locale = 'main.how-works-block.';

    return (
        <section className={cn()} id={UrlsEnum.HOW_IT_WORKS}>
            <div className={cn('wrapper')}>
                <div className={cn('head')}>
                    <h2>{t(`${locale}title`)}</h2>
                    <Button size='large'>{t(`${locale}button-label`)}</Button>
                </div>

                <div className={cn('benefits-list')}>
                    <IconBlock label={t(`${locale}benefits-list.comfortable`)}>
                        <ComputerIcon />
                    </IconBlock>
                    <IconBlock label={t(`${locale}benefits-list.skip-office-visit`)}>
                        <CityIcon />
                    </IconBlock>
                    <IconBlock label={t(`${locale}benefits-list.diverse-path-choices`)}>
                        <GlobeIcon />
                    </IconBlock>
                </div>
            </div>
        </section>
    );
};

export default HowWorksBlock;
