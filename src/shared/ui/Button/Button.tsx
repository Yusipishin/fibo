import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

type ButtonTheme = 'clear' | 'inverted' | 'accent' | 'outline';
type ButtonRadius = 'halfRadius' | 'xsRadius';
type ButtonSize = 'size_xs' | 'size_s' | 'size_m' | 'size_l' | 'size_xl';
type ButtonEffect = 'opacityEffect' | 'scaleEffect';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    /**
     * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
     */
    theme?: ButtonTheme;
    /**
     * Флаг, делающий кнопку квадратной
     */
    square?: boolean;
    /**
     * Размер кнопки в соответствии с дизайн системой
     */
    size?: ButtonSize;
    /**
     * Флаг, отвечающий за работу кнопки
     */
    disabled?: boolean;
    /**
     * Содержимое кнопки
     */
    children?: ReactNode;
    /**
     * Увеличивает кнопку на всю свободную ширину
     */
    max?: boolean;
    /**
     * Округляет кнопку
     */
    radius?: ButtonRadius;
    /**
     * Задаёт эффект при наведении на кнопку
     */
    effect?: ButtonEffect;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = 'clear',
        square,
        size = 'size_m',
        radius = 'xsRadius',
        disabled,
        max,
        effect = 'opacityEffect',
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.max]: max,
    };

    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(cls.Button, mods, [
                className,
                cls[theme],
                cls[size],
                cls[radius],
                cls[effect],
            ])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
