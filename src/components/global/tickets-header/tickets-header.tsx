import { classname } from 'utils';
import { Header } from '../header';

import './tickets-header.scss';
import { TravelForm } from 'components/common/travel-form/travel-form';

const cn = classname('tickets-header');

export const TicketsHeader = () => (
    <div className={cn()}>
        <Header />
        <div className={cn('form-wrapper')}>
            <TravelForm isRow={true} />
        </div>
    </div>
);

