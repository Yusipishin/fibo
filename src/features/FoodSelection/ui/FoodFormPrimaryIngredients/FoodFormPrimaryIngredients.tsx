import { memo } from 'react';
import { Text } from '@/shared/ui/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AllFoodProps } from '@/entities/Food';

interface FoodFormPrimaryIngredientsProps {
    food?: AllFoodProps;
    className?: string;
}

export const FoodFormPrimaryIngredients = memo(
    (props: FoodFormPrimaryIngredientsProps) => {
        const { className, food } = props;

        return (
            <Text
                className={classNames('', {}, [className])}
                text={food?.ingredients?.primary
                    .map((ingr) => ingr?.name)
                    .join(', ')}
            />
        );
    },
);
