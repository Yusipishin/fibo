import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AllFoodProps, FoodPath } from '@/entities/Food';
import { Page } from '@/widgets/Page';
import { MainPageSlider } from '../MainPageSlider/MainPageSlider';
import { FoodList, FoodModal } from '@/features/FoodSelection';

const foodLists: { title: string; path: FoodPath }[] = [
    {
        title: 'Пицца',
        path: FoodPath.PIZZAS,
    },
    {
        title: 'Напитки',
        path: FoodPath.DRINKS,
    },
    {
        title: 'Десерты',
        path: FoodPath.DESSERTS,
    },
    {
        title: 'Закуски',
        path: FoodPath.SNACKS,
    },
];

const MainPage = memo(() => {
    const { t } = useTranslation();
    const [isFoodModal, setIsFoodModal] = useState(false);
    const [food, setFood] = useState({});

    const onCloseModal = useCallback(() => {
        setIsFoodModal(false);
    }, []);

    const onShowModal = useCallback((food: AllFoodProps) => {
        setIsFoodModal(true);
        setFood(food);
    }, []);

    return (
        <Page data-testid="MainPage">
            <MainPageSlider />
            {foodLists.map((food) => (
                <FoodList
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
        </Page>
    );
});

export default MainPage;
