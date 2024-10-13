import { CSSProperties } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    marginTop?: string | number;
    marginBottom?: string | number;
    border?: string;
}

export const Skeleton = (props: SkeletonProps) => {
    const {
        className,
        height,
        width,
        border = 10,
        marginTop,
        marginBottom,
    } = props;

    const styles: CSSProperties = {
        width,
        height,
        marginTop,
        marginBottom,
        borderRadius: border,
    };

    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={styles}
        />
    );
};
