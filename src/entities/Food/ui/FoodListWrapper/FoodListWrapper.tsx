import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text';
import { AllFoodProps } from '../../model/types/food';
import FoodItem from '../FoodItem/FoodItem';
import cls from './FoodListWrapper.module.scss';
import { Skeleton } from '@/shared/ui/Skeleton';

interface FoodListWrapperProps {
    title: string;
    isError?: boolean;
    isLoading?: boolean;
    className?: string;
    foods: AllFoodProps[];
    onShowModal?: (food: AllFoodProps) => void;
}

const getSkeletons = () =>
    new Array(6).fill(0).map(() => <Skeleton width={250} height={360} />);

export const FoodListWrapper = memo((props: FoodListWrapperProps) => {
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
