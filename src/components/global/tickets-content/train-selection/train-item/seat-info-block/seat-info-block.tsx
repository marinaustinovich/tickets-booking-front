import React from 'react';
import { useTranslation } from 'react-i18next';
import { classname, findMinValue } from 'utils';
import { DepartureInfo, PriceInfo, SeatsInfo } from 'types';
import { Button, SeatRow } from 'components';
import { CupIcon, ExpressIcon, WifiIcon } from 'icons';

import './seat-info-block.scss';

type Props = {
    departure: DepartureInfo;
    availableSeatsInfo: SeatsInfo;
    priceInfo: Record<string, PriceInfo>;
};
const cn = classname('seat-info-block');

export const SeatInfoBlock = ({ availableSeatsInfo, priceInfo, departure }: Props) => {
    const { t } = useTranslation('global');
    const { have_wifi, is_express } = departure;

    return (
        <div className={cn()}>
            {Object.entries(availableSeatsInfo).map(([classSeat, count]) => {
                const prices = priceInfo[classSeat];
                const minPriceValue = findMinValue(prices);

                return <SeatRow key={classSeat} classSeat={classSeat} count={count} minPrice={minPriceValue} />;
            })}
            <div className={cn('advantages')}>
                <div>{have_wifi && <WifiIcon />}</div>
                <div>{is_express && <ExpressIcon />}</div>
                <div>
                    <CupIcon />
                </div>
            </div>
            <Button view='primary-white' size='large-narrow'>
                {t('tickets.trains.select-button-label')}
            </Button>
        </div>
    );
};

// {
//     "have_first_class": false,
//     "have_second_class": false,
//     "have_third_class": false,
//     "have_fourth_class": false,
//     "have_wifi": false,
//     "have_air_conditioning": false,
//     "is_express": false,
//     "min_price": 581,
//     "available_seats": 110,
//     "available_seats_info": {
//       "third": 48,
//       "fourth": 62
//     },
//     "departure": {
//       "_id": "64103a135c49ea004634ac84",
//       "have_first_class": false,
//       "have_second_class": false,
//       "have_third_class": true,
//       "have_fourth_class": true,
//       "have_wifi": true,
//       "have_air_conditioning": false,
//       "is_express": false,
//       "min_price": 581,
//       "duration": 186480,
//       "available_seats": 110,
//       "available_seats_info": {
//         "third": 48,
//         "fourth": 62
//       },
//       "train": {
//         "_id": "641037f15c49ea004632f8d8",
//         "name": "Тройка - 89"
//       },
//       "from": {
//         "railway_station_name": "Павелецкий",
//         "city": {
//           "_id": "641037eb5c49ea004632ee6e",
//           "name": "москва"
//         },
//         "datetime": 1673775344
//       },
//       "to": {
//         "railway_station_name": "Московский",
//         "city": {
//           "_id": "641037eb5c49ea004632ee6f",
//           "name": "санкт-петербург"
//         },
//         "datetime": 1673961824
//       },
//       "price_info": {
//         "third": {
//           "top_price": 4270,
//           "bottom_price": 2600,
//           "side_price": 3855
//         },
//         "fourth": {
//           "top_price": 657,
//           "bottom_price": 581
//         }
//       }
//     }
//   },
