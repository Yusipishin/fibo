import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '@/shared/ui/Card';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import { useDeleteCartItem, useGetCartItems } from '../../api/cartApi';
import { getUserAuthData } from '@/entities/User';
import cls from './CartSidebarItem.module.scss';
import closeIcon from '@/shared/assets/img/icons/close-grey-ic.svg';

interface CartSidebarItemProps {
    id: string;
    className?: string;
    title: string;
    description: string;
    count: number;
    price: number;
    img: string;
}

export const CartSidebarItem = memo((props: CartSidebarItemProps) => {
    const { className, count, description, price, title, img, id } = props;
    const userData = useSelector(getUserAuthData);
    const [deleteCartItemMutation] = useDeleteCartItem();
    const { refetch: refetchCartItems } = useGetCartItems({
        userId: userData?.id ?? '',
    });

    const truncatedDescription =
        description.length > 30
            ? `${description.substring(0, 30)}...`
            : description;

    const handleDeleteCartItem = useCallback(() => {
        try {
            deleteCartItemMutation({
                id,
                userId: userData?.id ?? '',
            }).then(() => refetchCartItems());
        } catch (e) {
            console.log(e);
        }
    }, [deleteCartItemMutation, id, refetchCartItems, userData?.id]);

    return (
        <Card
            theme={CardTheme.OUTLINE}
            className={classNames('', {}, [className])}
        >
            <HStack className={cls.wrapper}>
                <AppImage size={120} src={img} />
                <VStack>
                    <Text title={{ tag: 'h3', txt: title }} />
                    <Text text={truncatedDescription} />
                    <HStack>
                        <Text text={`COUNT: ${count}`} />
                        <Text text={`PRICE: ${price}`} />
                    </HStack>
                </VStack>
                <Icon onClick={handleDeleteCartItem} Svg={closeIcon} />
            </HStack>
        </Card>
    );
});
