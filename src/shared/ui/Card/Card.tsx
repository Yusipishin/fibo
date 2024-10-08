import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
    OUTLINE = 'outline',
}

interface CardProps extends ButtonHTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
    max?: boolean;
}

export const Card = memo((props: CardProps) => {
    const { max, className, children, theme, ...otherProps } = props;

    return (
        <div
            className={classNames(cls.Card, { [cls.maxWidth]: max }, [
                className,
                cls[theme],
            ])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
