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

interface Weight {
    traditional: TraditionalDoughWeight;
    thin: ThinDoughWeight;
}

interface PrimaryIngredient {
    name: string;
    necessary: false;
}

interface AdditionalIngredient {
    name: string;
    img: string;
    sale: Sale;
}

interface Ingredients {
    primary: PrimaryIngredient[];
    additional: AdditionalIngredient[];
}

export interface Pizza {
    id: string;
    img: string;
    name: string;
    sale: Sale;
    weight: Weight;
    ingredients: Ingredients;
}

export interface Drink {
    id: string;
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
