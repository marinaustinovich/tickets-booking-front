import { classname } from 'utils';
import { InfoBlock } from './info-block';
import { HowWorksBlock } from './how-works-block';
import { ReviewsBlock } from './reviews-block';

import './main-content.scss';

const cn = classname('main-content');

export const MainContent = () => {
    return (
        <main className={cn()}>
            <InfoBlock />
            <HowWorksBlock />
            <ReviewsBlock />
        </main>
    );
};

