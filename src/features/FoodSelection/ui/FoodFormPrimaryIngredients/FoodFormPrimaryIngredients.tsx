import { memo } from 'react';
import { Text } from '@/shared/ui/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Pizza } from '@/entities/Food';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';

interface FoodFormPrimaryIngredientsProps {
    food?: Pizza;
    className?: string;
    ingredients: string[];
    setIngredients: (list: string[]) => void;
}

export const FoodFormPrimaryIngredients = memo(
    (props: FoodFormPrimaryIngredientsProps) => {
        const { className, food, setIngredients, ingredients } = props;

        const items =
            food?.ingredients?.primary.map((ingr) => ingr?.name) || [];

        useInitialEffect(() => {
            const newIngredients = [...ingredients, ...items];
            setIngredients(newIngredients);
        });

        return (
            <Text
                className={classNames('', {}, [className])}
                text={items.join(', ')}
            />
        );
    },
);
