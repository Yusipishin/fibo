import { FoodType } from '../consts/food';

interface Sale {
    small: number;
    average: number;
    big: number;
}

interface TraditionalDoughWeight {
    small: number;
    average: number;
    big: number;
}

interface ThinDoughWeight {
    average: number;
    big: number;
}

export type DoughWeight = TraditionalDoughWeight | ThinDoughWeight;

export interface Weight {
    traditional: TraditionalDoughWeight;
    thin: ThinDoughWeight;
}

interface PrimaryIngredient {
    name: string;
    necessary: false;
}

export interface AdditionalIngredient {
    name: string;
    img: string;
    sale: Sale;
}

export interface Pizza {
    id: string;
    type: FoodType;
    img: string;
    name: string;
    sale: Sale;
    weight: Weight;
    ingredients: PrimaryIngredient[];
}

export interface Drink {
    id: string;
    type: FoodType;
    img: string;
    name: string;
    sale: number;
    portion: string;
    description: string;
}

export interface Snack extends Drink {
    weight: number;
}

export interface Dessert extends Drink {
    weight: number;
}

export type AllFoodProps = Pizza & Snack & Drink & Dessert;
