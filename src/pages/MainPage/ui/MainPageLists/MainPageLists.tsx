import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { FoodInfiniteList, FoodModal } from '@/features/FoodSelection';
import { foodLists } from '../../model/consts/food';
import { AllFoodProps } from '@/entities/Food';

interface MainPageListsProps {
    className?: string;
}

export const MainPageLists = memo((props: MainPageListsProps) => {
    const { t } = useTranslation();
    const { className } = props;

    const [isFoodModal, setIsFoodModal] = useState(false);
    const [food, setFood] = useState({});

    const onCloseModal = useCallback(() => {
        setIsFoodModal(false);
    }, []);

    const onShowModal = useCallback(
        (food: AllFoodProps) => {
            setIsFoodModal(true);
            setFood(food);
        },
        [setFood, setIsFoodModal],
    );

    return (
        <div className={classNames('', {}, [className])}>
            {foodLists?.map((food) => (
                <FoodInfiniteList
                    key={food.path}
                    title={t(food.title)}
                    endpoint={food.path}
                    onShowModal={onShowModal}
                />
            ))}
            <FoodModal
                food={food as AllFoodProps}
                isOpen={isFoodModal}
                onClose={onCloseModal}
            />
        </div>
    );
});
