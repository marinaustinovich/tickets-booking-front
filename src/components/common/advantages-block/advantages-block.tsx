import React from 'react';
import { classname } from 'utils';
import { CupIcon, ExpressIcon, WifiIcon } from 'icons';

import './advantages-block.scss';

type Props = {
    haveWiFi: boolean;
    isExpress: boolean;
};
const cn = classname('advantages-block');

export const AdvantagesBlock = ({ haveWiFi, isExpress }: Props) => (
    <div className={cn('')}>
        {haveWiFi && <WifiIcon />}
        {isExpress && <ExpressIcon />}
        <CupIcon />
    </div>
);
