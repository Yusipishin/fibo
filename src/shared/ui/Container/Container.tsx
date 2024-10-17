import { memo, ReactNode, RefObject } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Container.module.scss';

interface ContainerProps {
    id?: string;
    anchorRef?: RefObject<HTMLDivElement>;
    Tag?: 'div' | 'section' | 'header' | 'footer';
    className?: string;
    children: ReactNode;
}

export const Container = memo((props: ContainerProps) => {
    const { className, children, Tag = 'section', id, anchorRef } = props;

    return (
        <Tag className={classNames(cls.Container, {}, [className])}>
            {id && <div ref={anchorRef} id={id} className={cls.anchorBlock} />}
            {children}
        </Tag>
    );
});
