import { classname } from 'utils';
import { useTranslation } from 'react-i18next';
import { Logo } from 'components';
import { GroupTwoIcon } from 'icons';

import './branding.scss';

type Props = {
    className?: string;
};

const cn = classname('branding');

export const Branding = ({ className }: Props) => {
    const { t } = useTranslation('global');

    return (
        <div className={cn('', className)}>
            <Logo size='small' />
            <GroupTwoIcon />
            <div className={cn('year')}>{t('footer.year')}</div>
        </div>
    );
};

export default Branding;
