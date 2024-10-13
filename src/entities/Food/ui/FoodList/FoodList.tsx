import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text';
import { FoodAllProps } from '../../model/types/food';
import FoodItem from '../FoodItem/FoodItem';
import cls from './FoodList.module.scss';

interface FoodListProps {
    title: string;
    isError?: boolean;
    isLoading?: boolean;
    className?: string;
    foods: FoodAllProps[];
    onShowModal?: (food: FoodAllProps) => void;
}

const getSkeletons = () =>
    new Array(6)
        .fill(0)
        .map((_, i) => <Skeleton key={i} width={250} height={360} />);

export const FoodList = memo((props: FoodListProps) => {
    const { t } = useTranslation();
    const { className, title, foods, isLoading, isError, onShowModal } = props;

    if (isError) {
        return (
            <Text theme="error" text={t('Произошла непредвиденная ошибка')} />
        );
    }

    if (!isLoading && !foods?.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className])}>
                <Text text={t(`${title} не найдены`)} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.FoodList, {}, [className])}>
            <Text
                theme="accent"
                size={TextSize.XL}
                className={cls.title}
                title={{ txt: t(title), tag: 'h2' }}
            />
            <HStack
                max
                wrap
                align="stretch"
                justify="between"
                className={cls.listWrapper}
            >
                {foods?.map((food) => (
                    <FoodItem
                        food={food}
                        key={food.id}
                        onShowModal={onShowModal}
                    />
                ))}
                {isLoading && getSkeletons()}
            </HStack>
        </div>
    );
});
