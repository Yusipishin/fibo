import { memo, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView } from 'react-device-detect';
import { useSelector } from 'react-redux';
import { Button } from '@/shared/ui/Button';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text';
import { Sidebar } from '@/shared/ui/Sidebar/Sidebar';
import { CartSidebarItem, useGetCartItems } from '@/entities/Cart';
import { getUserAuthData } from '@/entities/User';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import girlImg from '@/shared/assets/img/bg/girl-bg.png';
import cls from './CartSidebarButton.module.scss';

interface CartSidebarButtonProps {
    className?: string;
}

export const CartSidebarButton = memo((props: CartSidebarButtonProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);
    const userData = useSelector(getUserAuthData);
    const { data: cartSidebarList } = useGetCartItems({
        userId: userData?.id ?? '',
    });

    const onClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    const onShow = useCallback(() => {
        setIsOpen(true);
    }, []);

    const itemsList = useMemo(() => {
        if (cartSidebarList?.length) {
            return (
                <VStack max>
                    {cartSidebarList?.map((item) => (
                        <CartSidebarItem
                            id={item.id}
                            key={item.id}
                            img={item.img}
                            title={item.name}
                            count={item.count}
                            price={item.price}
                            description={item.description}
                        />
                    ))}
                </VStack>
            );
        }
        return (
            <VStack className={cls.empty} justify="center" align="center">
                <AppImage src={girlImg} />
                <Text size={TextSize.ML} text={t('Ой, пусто!')} />
                <Text
                    text={t(
                        'Ваша корзина пуста, откройте меню и выберите понравившийся товар.',
                    )}
                />
            </VStack>
        );
    }, [cartSidebarList, t]);

    const trigger = (
        <Button onClick={onShow} theme="accent">
            <HStack gap="8">
                <Text text={t('Корзина')} />
                |
                <Text text={cartSidebarList?.length ?? 0} />
            </HStack>
        </Button>
    );

    return (
        <>
            {trigger}
            <BrowserView>
                <Sidebar isOpen={isOpen} onClose={onClose}>
                    {itemsList}
                </Sidebar>
            </BrowserView>
            {/* <MobileView>
                <Drawer onClose={onCloseDrawer} isOpen={isOpen}>
                    <NotificationList />
                </Drawer>
            </MobileView> */}
        </>
    );
});
