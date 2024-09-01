import { AllFoodProps } from '@/entities/Food';

export interface FoodSelectionSchema {
    food: AllFoodProps;
    isLoading: boolean;
    error?: string;
}
