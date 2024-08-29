import { memo } from 'react';
import { AllFoodProps, FoodListWrapper, FoodPath } from '@/entities/Food';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useGetList } from '@/shared/lib/hooks/useGetList/useGetList';
import { VStack } from '@/shared/ui/Stack';
import cls from './FoodList.module.scss';

interface FoodListProps {
    title: string;
    endpoint: FoodPath;
    className?: string;
    onShowModal?: (food: AllFoodProps) => void;
}

export const FoodList = memo((props: FoodListProps) => {
    const { className, endpoint, title, onShowModal } = props;

    const {
        data: foods,
        error,
        isLoading,
    } = useGetList<AllFoodProps, FoodPath>(endpoint);

    if (isLoading || error || !foods) return null;

    return (
        <VStack max className={classNames(cls.FoodLists, {}, [className])}>
            <FoodListWrapper
                foods={foods}
                title={title}
                isLoading={isLoading}
                onShowModal={onShowModal}
            />
        </VStack>
    );
});
