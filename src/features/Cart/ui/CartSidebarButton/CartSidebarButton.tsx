import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { CartSidebar } from '../CartSidebar/CartSidebar';

interface CartSidebarButtonProps {
    className?: string;
}

export const CartSidebarButton = memo((props: CartSidebarButtonProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);
    // const SidebarItemsList = useSelector(getSidebarItems);

    const onClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    const onShow = useCallback(() => {
        setIsOpen(true);
    }, []);

    // const itemsList = useMemo(
    //     () =>
    //         SidebarItemsList.map((item) => (
    //             <SidebarItem
    //                 key={item.path}
    //                 item={item}
    //                 collapsed={collapsed}
    //             />
    //         )),
    //     [SidebarItemsList, collapsed],
    // );

    return (
        <>
            <Button onClick={onShow} theme="accent">
                <HStack gap="8">
                    <Text text={t('Корзина')} />
                    |
                    <Text text="3" />
                </HStack>
            </Button>
            <CartSidebar isOpen={isOpen} onClose={onClose} />
        </>
    );
});
