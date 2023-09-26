import { classname } from 'utils';

import './main-content.scss';
import { InfoBlock } from './info-block';
import { HowWorksBlock } from './how-works-block';
import { ReviewsBlock } from './reviews-block';

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

export default MainContent;
