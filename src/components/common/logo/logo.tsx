import { classname } from 'utils';
import { useTranslation } from 'react-i18next';
import { LogoIcon } from 'icons';

import './logo.scss';

type Props = {
    size?: 'medium' | 'small';
};

const cn = classname('logo');

export const Logo = ({ size = 'medium' }: Props) => {
    const { t } = useTranslation('common');

    return (
        <div className={cn('', [size])}>
            <LogoIcon />
            <span>{t('commons.logo-title')}</span>
        </div>
    );
};

export default Logo;
