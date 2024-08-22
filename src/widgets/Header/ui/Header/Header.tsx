import { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { HeaderTop } from '../HeaderTop/HeaderTop';
import { HeaderBottom } from '../HeaderBottom/HeaderBottom';
import { getScrollByPath } from '@/features/Scrollbar';
import { StateSchema } from '@/app/providers/StoreProvider';
import cls from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

const headerFullHeight = 140;
const headerCollapsedHeight = 90;

export const Header = memo(({ className }: HeaderProps) => {
    const { pathname } = useLocation();
    const [collapsed, setCollapsed] = useState(false);

    const scrollPosition = useSelector((state: StateSchema) =>
        getScrollByPath(state, pathname),
    );

    useEffect(() => {
        setCollapsed(scrollPosition > headerFullHeight);
    }, [scrollPosition]);

    return (
        <header
            className={classNames(cls.Header, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <VStack className={cls.headerWrapper} gap="16">
                {!collapsed && <HeaderTop />}
                <HeaderBottom scrolled={collapsed} />
            </VStack>
        </header>
    );
});
