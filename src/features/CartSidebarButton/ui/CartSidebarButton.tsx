import { memo, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView } from 'react-device-detect';
import { useSelector } from 'react-redux';
import { Button } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Sidebar } from '@/shared/ui/Sidebar/Sidebar';
import { CartSidebarItem, useGetCartItems } from '@/entities/Cart';
import { getUserAuthData } from '@/entities/User';

interface CartSidebarButtonProps {
    className?: string;
}

export const CartSidebarButton = memo((props: CartSidebarButtonProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);
    const userData = useSelector(getUserAuthData);
    const {
        data: cartSidebarList,
        isLoading,
        isError,
    } = useGetCartItems({
        userId: userData?.id ?? '',
    });

    console.log(cartSidebarList);

    const onClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    const onShow = useCallback(() => {
        setIsOpen(true);
    }, []);

    const itemsList = useMemo(
        () =>
            cartSidebarList?.map((item) => (
                <CartSidebarItem
                    key={item.img}
                    img={item.img}
                    title={item.name}
                    count={item.count}
                    price={item.price}
                    description={item.description}
                />
            )),
        [cartSidebarList],
    );

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
