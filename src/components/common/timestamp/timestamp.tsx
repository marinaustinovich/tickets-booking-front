import React from 'react';
import { pluralize } from 'utils';

type Props = {
    timestamp: number;
    language: string;
};

export const Timestamp = ({ timestamp, language }: Props) => {
    const hours = Math.floor(timestamp / 3600);
    const minutes = Math.floor((timestamp % 3600) / 60);

    return (
        <>
            {language === 'ru' ? (
                <>
                    {hours} {pluralize(hours, ['час', 'часа', 'часов'])}
                    <br />
                    {minutes} {pluralize(minutes, ['минута', 'минуты', 'минут'])}
                </>
            ) : (
                <>
                    {hours} hour(s)
                    <br />
                    {minutes} minute(s)
                </>
            )}
        </>
    );
};
