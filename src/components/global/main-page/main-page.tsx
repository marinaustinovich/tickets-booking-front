import { classname } from 'utils';

import './main-page.scss';
import { InfoBlock } from './info-block';
import { HowWorksBlock } from './how-works-block';
import { ReviewsBlock } from './reviews-block';

const cn = classname('main-page');

export const MainPage = () => {
    return (
        <main className={cn()}>
            <InfoBlock />
            <HowWorksBlock />
            <ReviewsBlock />
        </main>
    );
};

export default MainPage;
