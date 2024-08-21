import { memo } from 'react';
import cls from './Switchers.module.scss';
import { HStack } from '@/shared/ui/Stack';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';

export const Switchers = memo(() => (
    <div className={cls.Switchers}>
        <HStack gap="16">
            <LangSwitcher />
            <ThemeSwitcher />
        </HStack>
    </div>
));
