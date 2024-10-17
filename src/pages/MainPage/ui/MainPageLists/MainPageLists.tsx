import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { FoodInfiniteList, FoodModal } from '@/features/FoodSelection';
import { FoodAllProps, foodListLinks } from '@/entities/Food';

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
        (food: FoodAllProps) => {
            setIsFoodModal(true);
            setFood(food);
        },
        [setFood, setIsFoodModal],
    );

    return (
        <div className={classNames('', {}, [className])}>
            {foodListLinks?.map((food) => (
                <FoodInfiniteList
                    anchorRef={food.ref}
                    key={food.path}
                    endpoint={food.path}
                    title={t(food.title)}
                    onShowModal={onShowModal}
                />
            ))}
            <FoodModal
                food={food as FoodAllProps}
                isOpen={isFoodModal}
                onClose={onCloseModal}
            />
        </div>
    );
});
