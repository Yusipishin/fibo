import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import cls from './Header.module.scss';

import { HeaderTop } from '../HeaderTop/HeaderTop';
import { HeaderBottom } from '../HeaderBottom/HeaderBottom';

interface HeaderProps {
    className?: string;
    scrolled?: boolean;
}

export const Header = memo(({ className, scrolled }: HeaderProps) => {
    const headerCls = classNames(cls.Header, { [cls.scrolled]: scrolled }, [
        className,
    ]);

    return (
        <header className={headerCls}>
            <VStack className={cls.headerWrapper} gap="16">
                {!scrolled && <HeaderTop />}
                <HeaderBottom scrolled={scrolled} />
            </VStack>
        </header>
    );
});
