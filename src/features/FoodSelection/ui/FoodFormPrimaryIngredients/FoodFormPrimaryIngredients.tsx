import { memo } from 'react';
import { Text, TextSize } from '@/shared/ui/Text';
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
                size={TextSize.S}
                theme="secondary"
                className={classNames('', {}, [className])}
                text={items.join(', ')}
            />
        );
    },
);
