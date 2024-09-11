import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Container.module.scss';

interface ContainerProps {
    Tag?: 'div' | 'section' | 'header' | 'footer';
    className?: string;
    children: ReactNode;
}

export const Container = memo((props: ContainerProps) => {
    const { className, children, Tag = 'section' } = props;

    return (
        <Tag className={classNames(cls.Container, {}, [className])}>
            {children}
        </Tag>
    );
});
