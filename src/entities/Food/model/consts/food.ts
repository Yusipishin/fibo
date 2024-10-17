import { createRef, RefObject } from 'react';
import { getRouteContact, getRoutePromo } from '@/shared/const/router';

export enum FoodPath {
    PIZZAS = 'pizzas',
    SNACKS = 'snacks',
    DRINKS = 'drinks',
    DESSERTS = 'desserts',
}

export enum FoodType {
    PIZZA = 'PIZZA',
    SNACK = 'SNACK',
    DRINK = 'DRINK',
    DESSERT = 'DESSERT',
}

export const foodListLinks: {
    ref: RefObject<HTMLDivElement>;
    title: string;
    path: FoodPath;
}[] = [
    {
        ref: createRef(),
        title: 'Пицца',
        path: FoodPath.PIZZAS,
    },
    {
        ref: createRef(),
        title: 'Напитки',
        path: FoodPath.DRINKS,
    },
    {
        ref: createRef(),
        title: 'Десерты',
        path: FoodPath.DESSERTS,
    },
    {
        ref: createRef(),
        title: 'Закуски',
        path: FoodPath.SNACKS,
    },
];

export const foodPageLinks: { title: string; path: string }[] = [
    {
        title: 'Акции',
        path: getRoutePromo(),
    },
    {
        title: 'Контакты',
        path: getRouteContact(),
    },
];
