import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './FoodFormAdditionalIngredients.module.scss';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import { Text, TextSize } from '@/shared/ui/Text';
import { HStack } from '@/shared/ui/Stack';
import { DoughWeight, Pizza, PizzaWeight } from '@/entities/Food';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { mapPizzaWeight } from '../FoodFormInfo/FoodFormInfo';

interface FoodFormAdditionalIngredientsProps {
    food: Pizza;
    weight: PizzaWeight;
    className?: string;
    ingredients: string[];
    setIngredients: (list: string[]) => void;
}

export const FoodFormAdditionalIngredients = memo(
    (props: FoodFormAdditionalIngredientsProps) => {
        const { className, food, weight, setIngredients, ingredients } = props;
        const weighthEn = mapPizzaWeight[weight] as keyof DoughWeight;

        const handleClick = (ingr: string) => () => {
            const newIngredients = [...ingredients, ingr];
            setIngredients(newIngredients);
        };

        return (
            <HStack
                max
                wrap
                gap="8"
                justify="between"
                className={classNames(cls.FoodFormAdditionalIngredients, {}, [
                    className,
                ])}
            >
                {food?.ingredients?.additional.map((ingr) => {
                    if (!ingr?.sale[weighthEn]) return null;

                    return (
                        <Button
                            onClick={handleClick(ingr.name)}
                            theme={ButtonTheme.OUTLINE_SECONDARY}
                            className={cls.addIngr}
                        >
                            <AppImage className={cls.ingrImg} src={ingr.img} />
                            <Text
                                align="center"
                                size={TextSize.XS}
                                text={ingr.name}
                            />
                            <Text
                                align="center"
                                size={TextSize.XS}
                                text={`${ingr?.sale[weighthEn]} ₽`}
                            />
                        </Button>
                    );
                })}
            </HStack>
        );
    },
);
