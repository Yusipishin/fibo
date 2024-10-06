import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '@/shared/ui/Card';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import cls from './CartSidebarItem.module.scss';

interface CartSidebarItemProps {
    className?: string;
    title: string;
    description: string;
    count: number;
    price: number;
    img: string;
}

export const CartSidebarItem = memo((props: CartSidebarItemProps) => {
    const { className, count, description, price, title, img } = props;

    const truncatedDescription =
        description.length > 30
            ? `${description.substring(0, 30)}...`
            : description;

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
            </HStack>
        </Card>
    );
});
