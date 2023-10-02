import React, { useState, useCallback } from 'react';
import { IconButton } from '../icon-button';
import { MinusIcon, PlusIcon } from 'icons';
import { classname } from 'utils';
import { TransitTimeBlock } from '../transit-time-block/transit-time-block';

import './direction-block.scss';

type Props = {
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    label?: string;
    nameField: string;
};

const cn = classname('direction-block');

export const DirectionBlock = ({ Icon, label, nameField }: Props) => {
    const [isShowTimeBlock, setIsShowTimeBlock] = useState<boolean>(false);

    const handleShowTimeBlock = useCallback(() => {
        setIsShowTimeBlock(prev => !prev);
    }, []);

    return (
        <div className={cn()}>
            <div className={cn('title')}>
                <Icon />
                <div className={cn('label')}>{label}</div>
                <IconButton className={cn('show-btn')} Icon={isShowTimeBlock ? MinusIcon : PlusIcon} onClick={handleShowTimeBlock} />
            </div>
            {isShowTimeBlock && <TransitTimeBlock nameField={nameField} />}
        </div>
    );
};
