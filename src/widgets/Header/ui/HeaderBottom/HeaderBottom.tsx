import { memo, RefObject, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { AppLink } from '@/shared/ui/AppLink';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import Logo from '@/shared/assets/img/logo.png';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text } from '@/shared/ui/Text';
import { getUserAuthData } from '@/entities/User';
import { AuthModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { CartSidebarButton } from '@/features/CartSidebarButton';
import { foodListLinks, foodPageLinks } from '@/entities/Food';
import { getRouteMain } from '@/shared/const/router';

interface HeaderBottomProps {
    scrolled?: boolean;
}

export const HeaderBottom = memo(({ scrolled }: HeaderBottomProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const authBtn = () => {
        if (authData) {
            return <AvatarDropdown />;
        }
        return (
            <Button onClick={onShowModal}>
                <Text theme="secondary" text={t('Войти')} />
            </Button>
        );
    };

    const onScrollToList = (ref: RefObject<HTMLDivElement>) => {
        setTimeout(() => {
            if (ref.current) {
                window.scrollTo({
                    top:
                        ref.current.getBoundingClientRect().top +
                        window.scrollY,
                    behavior: 'smooth',
                });
            }
        }, 300);
    };

    const onScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <HStack max justify="between" gap="32">
            {scrolled && (
                <AppLink onClick={onScrollTop} to={getRouteMain()}>
                    <AppImage
                        src={Logo}
                        alt={t('Логотип сайта Fibo')}
                        fallback={<Skeleton width={80} height={60} />}
                    />
                </AppLink>
            )}
            <HStack gap="16">
                {foodListLinks?.map((item) => (
                    <AppLink
                        key={item.path}
                        onClick={() => onScrollToList(item.ref)}
                        to={`${getRouteMain()}#${item.path}`}
                    >
                        {t(item.title)}
                    </AppLink>
                ))}
                {foodPageLinks.map((item) => (
                    <AppLink key={item.path} to={item.path}>
                        {t(item.title)}
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
