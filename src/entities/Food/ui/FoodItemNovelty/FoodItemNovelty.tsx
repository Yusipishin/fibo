import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './FoodItemNovelty.module.scss';

interface FoodItemNoveltyProps {
    className?: string;
}

export const FoodItemNovelty = memo((props: FoodItemNoveltyProps) => {
    const { className } = props;

    return <div className={classNames(cls.FoodItemNovelty, {}, [className])} />;
});
