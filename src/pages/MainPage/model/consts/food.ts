import { FoodPath } from '@/entities/Food';

export const foodLists: { title: string; path: FoodPath }[] = [
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
