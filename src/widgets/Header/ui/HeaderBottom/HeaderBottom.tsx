import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { AppLink } from '@/shared/ui/AppLink';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import Logo from '@/shared/assets/img/logo.png';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text } from '@/shared/ui/Text';
import { CartSidebarButton } from '@/features/Cart';
import { getUserAuthData } from '@/entities/User';
import { AuthModal } from '@/features/AuthByUsername';
import { Avatar } from '@/shared/ui/Avatar';

interface HeaderBottomProps {
    scrolled?: boolean;
}

export const navLinks: Record<string, string> = {
    Пицца: '#pizza-list',
    Паста: '#paste-list',
    Супы: '#soups-list',
    Салаты: '#salads-list',
    Напитки: '#drinks-list',
    Десерты: '#desserts-list',
    Бакалея: '#grocery-list',
    Закуски: '#snacks-list',
    Акции: '#promotions-list',
    Комбо: '#combo-list',
    Контакты: '#contacts-list',
};

export const HeaderBottom = memo(({ scrolled }: HeaderBottomProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    console.log(authData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const authBtn = () => {
        if (authData) {
            return (
                <Avatar
                    size={50}
                    alt={authData?.username}
                    src={authData?.profile?.avatar}
                />
            );
        }
        return (
            <Button onClick={onShowModal}>
                <Text theme="secondary" text={t('Войти')} />
            </Button>
        );
    };

    return (
        <HStack max justify="between" gap="32">
            {scrolled && (
                <AppLink to="/">
                    <AppImage
                        src={Logo}
                        alt={t('Логотип сайта Fibo')}
                        fallback={<Skeleton width={80} height={60} />}
                    />
                </AppLink>
            )}
            <HStack gap="16">
                {Object.keys(navLinks).map((key) => (
                    <AppLink key={key} to={navLinks[key]}>
                        {t(key)}
                    </AppLink>
                ))}
            </HStack>
            <HStack gap="32">
                {!scrolled && authBtn()}
                {isAuthModal && (
                    <AuthModal isOpen={isAuthModal} onClose={onCloseModal} />
                )}
                <CartSidebarButton />
            </HStack>
        </HStack>
    );
});
