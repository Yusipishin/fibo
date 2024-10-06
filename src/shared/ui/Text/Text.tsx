import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

type TextTheme = 'primary' | 'error' | 'accent' | 'secondary' | 'third' | 'bg';
type TextAlign = 'left' | 'right' | 'center';
type HeaderTagType = 'h1' | 'h2' | 'h3';

export enum TextSize {
    XS = 'size_xs',
    S = 'size_s',
    M = 'size_m',
    ML = 'size_ml',
    L = 'size_l',
    XL = 'size_xl',
}

interface TextProps {
    className?: string;
    title?: { txt: string; tag: HeaderTagType };
    text?: string | number;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;

    'data-testid'?: string;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = 'primary',
        align = 'left',
        size = TextSize.M,
        'data-testid': dataTestId = 'Text',
    } = props;

    const additional = [className, cls[theme], cls[align], cls[size]];

    return (
        <div className={classNames(cls.Text, {}, additional)}>
            {title && (
                <title.tag
                    className={cls.title}
                    data-testid={`${dataTestId}.Header`}
                >
                    {title.txt}
                </title.tag>
            )}
            {text && (
                <p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>
                    {text}
                </p>
            )}
        </div>
    );
});
