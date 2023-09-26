import React from 'react';

import { capitalizeHyphenatedString, classname } from 'utils';
import { DepartureOrArrivalInfo, Train } from 'types';
import { LeftArrowIcon, TrainIcon } from 'icons';

import './general-train-info-block.scss';

type Props = {
    train: Train;
    from: DepartureOrArrivalInfo;
    to: DepartureOrArrivalInfo;
};
const cn = classname('general-train-info-block');

export const GeneralTrainInfoBlock = ({ train, from,  to }: Props) => {
    return (
        <div className={cn()}>
            <div className={cn('avatar')}>
                <TrainIcon />
            </div>
            <div className={cn('train-name')}>{train.name}</div>
            <div>
                <div className={cn('from')}>
                    <span>{capitalizeHyphenatedString(from.city.name)}</span>
                    <LeftArrowIcon />
                </div>
                <div className={cn('to')}>{capitalizeHyphenatedString(to.city.name)}</div>
            </div>
        </div>
    );
};

export default GeneralTrainInfoBlock;

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
//         "third": 48,
//         "fourth": 62
//     },
//     "departure": {
//         "_id": "64103a135c49ea004634ac84",
//         "have_first_class": false,
//         "have_second_class": false,
//         "have_third_class": true,
//         "have_fourth_class": true,
//         "have_wifi": true,
//         "have_air_conditioning": false,
//         "is_express": false,
//         "min_price": 581,
//         "duration": 186480,
//         "available_seats": 110,
//         "available_seats_info": {
//             "third": 48,
//             "fourth": 62
//         },
//         "train": {
//             "_id": "641037f15c49ea004632f8d8",
//             "name": "Тройка - 89"
//         },
//         "from": {
//             "railway_station_name": "Павелецкий",
//             "city": {
//                 "_id": "641037eb5c49ea004632ee6e",
//                 "name": "москва"
//             },
//             "datetime": 1673775344
//         },
//         "to": {
//             "railway_station_name": "Московский",
//             "city": {
//                 "_id": "641037eb5c49ea004632ee6f",
//                 "name": "санкт-петербург"
//             },
//             "datetime": 1673961824
//         },
//         "price_info": {
//             "third": {
//                 "top_price": 4270,
//                 "bottom_price": 2600,
//                 "side_price": 3855
//             },
//             "fourth": {
//                 "top_price": 657,
//                 "bottom_price": 581
//             }
//         }
//     }
// },
