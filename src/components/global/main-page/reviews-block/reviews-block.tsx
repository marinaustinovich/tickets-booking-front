import React, { useState } from 'react';
import { classname } from 'utils';
import { useTranslation } from 'react-i18next';

import './reviews-block.scss';
import { User } from 'types';
import Review from './review/review';
import { Paginate } from 'components/common';
import { UrlsEnum } from 'enums';

const cn = classname('reviews-block');

export const ReviewsBlock = () => {
    const { t } = useTranslation('global');
    const locale = 'main.reviews-block.';
    const [page, setPage] = useState(1);
    const lastPage = 5;

    const users: User[] = [
        {
            userId: '1',
            name: 'Alice',
            text: "Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.",
            avatar: 'https://hypeava.ru/uploads/posts/2018-05/1527186603_7.png',
        },
        {
            userId: '3',
            name: 'Charlie',
            text: "Charlie's review text.",
            avatar: 'https://abrakadabra.fun/uploads/posts/2022-01/1641341854_1-abrakadabra-fun-p-instagram-avatarki-3.jpg',
        },
    ];

    return (
        <section className={cn()} id={UrlsEnum.REVIEWS}>
            <h2>{t(`${locale}title`)}</h2>
            <div className={cn('review-list')}>
                {users.map(user => (
                    <Review key={user.userId} user={user} />
                ))}
            </div>
            <Paginate lastPage={lastPage} page={page} onChange={setPage} />
        </section>
    );
};

export default ReviewsBlock;
