import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { FoodList, FoodPath } from '@/entities/Food';
import { Page } from '@/widgets/Page';
import { MainPageSlider } from '../MainPageSlider/MainPageSlider';

const MainPage = memo(() => {
    const { t } = useTranslation();

    return (
        <Page data-testid="MainPage">
            <MainPageSlider />
            <FoodList title={t('Пицца')} endpoint={FoodPath.PIZZAS} />
            <FoodList title={t('Напитки')} endpoint={FoodPath.DRINKS} />
            <FoodList title={t('Десерты')} endpoint={FoodPath.DESSERTS} />
            <FoodList title={t('Закуски')} endpoint={FoodPath.SNACKS} />
            <div style={{ marginBottom: '3500px' }} />
        </Page>
    );
});

export default MainPage;
