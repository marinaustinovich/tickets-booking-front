import { classname } from 'utils';
import './travel-datepicker.scss';
import { useTranslation } from 'react-i18next';
import { TravelForm } from 'components/common/travel-form/travel-form';

const cn = classname('travel-datepicker');

export const TravelDatePicker = () => {
    const { t } = useTranslation('global');

    return (
        <div className={cn()}>
            <div className={cn('title')}>
                <p>{t('header.travel-datepicker.title-first-row')}</p>
                <p>{t('header.travel-datepicker.title-second-row')}</p>
            </div>
            <TravelForm />
        </div>
    );
};

export default TravelDatePicker;
