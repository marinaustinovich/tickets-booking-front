import { classname } from 'utils';
import { useTranslation } from 'react-i18next';
import { IconButton, Logo } from 'components';
import { GroupTwoIcon } from 'icons';

import './branding.scss';

type Props = {
    className?: string;
    onShowContacts?: () => void;
};

const cn = classname('branding');

export const Branding = ({ className, onShowContacts }: Props) => {
    const { t } = useTranslation('global');

    return (
        <div className={cn('', className)}>
            <Logo size='small' />
            <IconButton Icon={GroupTwoIcon} onClick={onShowContacts} size='large' />
            <div className={cn('year')}>{t('footer.year')}</div>
        </div>
    );
};

