import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CartSidebarItem.module.scss';

interface CartSidebarItemProps {
    className?: string;
}

export const CartSidebarItem = memo((props: CartSidebarItemProps) => {
    const { className } = props;

    return <div className={classNames(cls.CartSidebarItem, {}, [className])} />;
});
