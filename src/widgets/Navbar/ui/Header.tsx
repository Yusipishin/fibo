import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Text, TextTheme } from '@/shared/ui/Text';
import cls from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

export const Header = memo(({ className }: HeaderProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);

    if (authData) {
        return (
            <header className={classNames(cls.Header, {}, [className])}>
                <Text
                    className={cls.appName}
                    theme={TextTheme.INVERTED}
                    title={t('Войти')}
                />
            </header>
        );
    }

    return (
        <header className={classNames(cls.Header, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_SECONDARY} className={cls.links}>
                {t('Войти')}
            </Button>
        </header>
    );
});
