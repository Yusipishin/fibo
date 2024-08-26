import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './FoodListNovelty.module.scss';

interface FoodListNoveltyProps {
    className?: string;
}

export const FoodListNovelty = memo((props: FoodListNoveltyProps) => {
    const { className } = props;

    return <div className={classNames(cls.FoodListNovelty, {}, [className])} />;
});
