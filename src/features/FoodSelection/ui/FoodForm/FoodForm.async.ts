import { FC, lazy } from 'react';
import { FoodFormProps } from './FoodForm';

export const FoodFormAsync = lazy<FC<FoodFormProps>>(
    () => import('./FoodForm'),
);
