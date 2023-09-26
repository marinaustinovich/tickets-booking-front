import { classname } from 'utils';

import './review.scss';
import { User } from 'types';
import { UrlsEnum } from 'enums/urlEnum';

type Props = {
    user: User;
};

const cn = classname('review');

export const Review = ({ user }: Props) => {
    const { avatar, name, text } = user;

    return (
        <div className={cn()}>
            <div className={cn('avatar')}>
                <img src={avatar ?? UrlsEnum.AVATAR_DEFAULT_URL} alt={`${name}'s avatar`} />
            </div>
            <div className={cn('content')}>
                <div className={cn('name')}>{name ?? 'unknown'}</div>
                {text && <div className={cn('text')}>{text}</div>}
            </div>
        </div>
    );
};

export default Review;
